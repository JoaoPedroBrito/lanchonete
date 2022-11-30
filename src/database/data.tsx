const produto_1 = {
    codigo: 1,
    nome: "Hot-Dog",
    descricao: "Pão e salsicha",
    valor: "7,50",
    categoria: {
        codigo: 1,
        descricao: "Lanche"
    }
};

const produto_2 = {
    codigo: 2,
    nome: "Hot-Dogão",
    descricao: "Pão e salsicha e salsicha",
    valor: "10,50",
    categoria: {
        codigo: 1,
        descricao: "Lanche"
    }
};

const produto_3 = {
    codigo: 3,
    nome: "Hot-Dogão Duplo",
    descricao: "Pão e salsicha e salsicha e pão e salsicha",
    valor: "15,50",
    categoria: {
        codigo: 1,
        descricao: "Lanche"
    }
};

export const produtos = [
    produto_1,
    produto_2,
    produto_3
];