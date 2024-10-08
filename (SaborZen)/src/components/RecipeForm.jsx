import { useState } from 'react';


function RecipeForm({}){
///se definen cinco constantes que almacenaran los datos respectivos de la nueva receta creada///
    const [recipeName, setName]= useState('')
    const [Time, setTime]= useState('')
    const [Dificult, setDififult]= useState('')
    const [Category, setCategory]= useState("")
    const [Description, setDescription]= useState("")
///Se establece la constante para poder guardar las recetas 
    const handleSubmit = (e)=>{
        e.preventDefault()
        addTask({
/// se reciben los datos ingresados gracias a los inputs y se relacionan con la receta creada
            Name: recipeName,
            Category: Category,
            Time: Time,
            Description: Description,
    } )
    const recipeName= ("")    
    const Category= ("")    
    const Description= ("")    
}
    
    return(
/// se crea el formulario del cual se van a estraer 
        <form className="recipe-form" onSubmit={(e) => handleSubmit(e)}>

        <input 
            type="text"
            placeholder='Agregar receta'
            value= {recipeName}
            onChange={(e)=>setName(e.target.value)} />
        <input 
            type="number"
            placeholder='Duracion en minutos'
            value={Time} 
            onChange={(e)=>setTime(e.target.value)}/>
        <select value={Dificult} onChange={(e)=>setDififult(e.target.value)}>
            <option value="">Dificultad</option>
            <option value="Facil">Facil</option>
            <option value="Medio">Medio</option>
            <option value="Dificil">Dificil</option>
        </select>
        <select value={Category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">categoria</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Cena">Cena</option>
            <option value="Postres">Postres</option>
            <option value="Vegetariana">Vegetariana</option>
            <option value="Bebidas">Bebidas</option>
        </select>
        <input 
            type="text"
            placeholder='Descripción...' 
            value={Description}
            onChange={setDescription}/>
        <button>Agregar</button>
        </form>

    )



}
export default RecipeForm;