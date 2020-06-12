const configs = [
    {
        Name:"Conway's Game of Life",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3],
        Alive_Rule:[2,3],
        Max_State: 1
    },
    {
        Name:"Brian's Brain",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[2],
        Alive_Rule:[],
        Max_State: 2
    },
    {
        Name:"Seeds",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[2],
        Alive_Rule:[],
        Max_State: 1
    },
    {
        Name:"Amoeba",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3,5,7],
        Alive_Rule:[1,3,5,8],
        Max_State: 1
    },
    {
        Name:"Coagulations",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3,7,8],
        Alive_Rule:[2,3,5,6,7,8],
        Max_State: 1
    },
    {
        Name:"Long Life",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3,4,5],
        Alive_Rule:[5],
        Max_State: 1
    },
    {
        Name:"Gnarl",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[1],
        Alive_Rule:[1],
        Max_State: 1
    },
    {
        Name:"2x2",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3,6],
        Alive_Rule:[1,2,5],
        Max_State: 1
    },
    {
        Name:"34 Life",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3,4],
        Alive_Rule:[3,4],
        Max_State: 1
    },
    {
        Name:"Replicator",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[1,3,5,7],
        Alive_Rule:[1,3,5,7],
        Max_State: 1
    },
    {
        Name:"Maze",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3],
        Alive_Rule:[1,2,3,4],
        Max_State: 1
    },
    {
        Name:"Frogs", 
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3,4],
        Alive_Rule:[1,2],
        Max_State: 2
    },
    {
        Name:"Walled Cities",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[4,5,6,7,8],
        Alive_Rule:[2,3,4,5],
        Max_State: 1
    },
    {
        Name:"Fireworks",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[1,3],
        Alive_Rule:[2],
        Max_State: 21
    },
    {
        Name:"Xtasy",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[2,3,5,6],
        Alive_Rule:[1,4,5,6],
        Max_State: 15
    },
    {
        Name:"Frozen Spirals",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[2,3],
        Alive_Rule:[3,5,6],
        Max_State: 5
    },
    {
        Name:"Burstll",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[3,4,6,8],
        Alive_Rule:[2,3,5,6,7,8],
        Max_State: 8
    },
    {
        Name:"Star Wars",
        Type:"moore_simple_neighborhood",
        Birth_Rule:[2],
        Alive_Rule:[3,4,5],
        Max_State: 3
    }
];