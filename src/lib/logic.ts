type Combo = ReturnType<typeof generateCombinations>[number]

// ================================
// Função para gerar combinações de verdade
// ================================
export function generateCombinations(variables: string[], startTrue = true) {
    const n = variables.length
    const total = 2 ** n
    const combinations = []

    for (let i = 0; i < total; i++) {
        const combo: Record<string, boolean> = {}
        variables.forEach((variable, index) => {
            const repeat = 2 ** (n - index - 1)
            const block = Math.floor(i / repeat)
            const parity = block % 2
            combo[variable] = parity === (startTrue ? 0 : 1)
        })
        combinations.push(combo)
    }

    return combinations
}

// ================================
// Normaliza expressão para JS
// ================================
export function expressionToJS(expr: string) {
    return expr
        .replace(/<->/g, '===') // equivalência
        .replace(/->/g, '<=') // implicação temporária
        .replace(/\^/g, '&&') // conjunção
        .replace(/\bv\b/g, '||') // disjunção (só "v" isolado)
        .replace(/~/g, '!') // negação
        .replace(/\s+/g, '') // remove espaços
}

// ================================
// Substitui variáveis pelos valores da combinação
// ================================
export function replaceVariables(expr: string, combo: Combo) {
    let result = expr
    for (const [variable, value] of Object.entries(combo)) {
        const regex = new RegExp(`\\b${variable}\\b`, 'g')
        result = result.replace(regex, String(value))
    }
    return result
}

// ================================
// Avalia a expressão lógica
// ================================
export function evaluate(expr: string, combo: Combo): boolean {
    let e = replaceVariables(expressionToJS(expr), combo)
    // Trata implicação -> : p -> q === !p || q
    e = e.replace(/([truefals()!&|]+)<=([truefals()!&|]+)/g, '!($1)||($2)')
    return eval(e)
}

// ================================
// Extrai variáveis ignorando o 'v' operador
// ================================
export function getVariables(expr: string) {
    const matches = expr.match(/[a-z]/gi) || []
    return [...new Set(matches)].filter(v => v !== 'v').sort()
}
