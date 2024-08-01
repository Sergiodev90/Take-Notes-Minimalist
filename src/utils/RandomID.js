export const RandomId = () =>{
    const RandomId__Category = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const RandomId__Todo = () => Math.random().toString(16).substring(2, 15) + Math.random().toString(16).substring(2, 15)

    return {RandomId__Category, RandomId__Todo}
}