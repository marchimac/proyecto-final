import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
const TaskContext = React.createContext()
const useTareas = () => { return useContext(TaskContext) }
const TaskProvider = ({ children }) => {
    const [tarea, setTarea] = useLocalStorage('tareas', [])
    const [tareas, setTareas] = useLocalStorage('tareas', [])
    const [mostrarModalAñadirTarea, setMostrarModalAñadirTarea] = useState(false)
    const [mostrarModalEditarTarea, setMostrarModalEditarTarea] = useState()
    const [tareaQueSeEdita, setTareaQueSeEdita] = useState([])
    function accionarTarea(id) {
        const newTareas = [...tareas]
        const tarea = newTareas.find(tarea => tarea.id === id)                       // encuentra tarea con mismo id que id parámetro
        tarea.isComplete = !tarea.isComplete
        setTareas(newTareas)
    }
    function handleAddItem({ name }) {                                               // Destructuring del objeto que recibe como parámetro
        if (name === '') return                                                      // Si el campo está vacío, se sale de la función
        setTareas(prevTareas => {
            return [...prevTareas, { id: uuidv4(), name: name, isComplete: false }]  // Coge la copia de tareas y añade el objeto (lo que está entre {})
        })
    }
    function handleEditarTarea(tarea) {
        const newTareas = [...tareas]
        const tareaEditada = newTareas.find(t => t.id === tarea.id)
        tareaEditada.name = tarea.name
        setTarea({tareaEditada})
        setTareas(newTareas)
    }
    function eliminarTarea(tarea) {
        const tareasAnteriores = [...tareas]
        const newTareas = tareasAnteriores.filter(t => t.id !== tarea.id)    // "filter()" crea array con elementos cumplen condición.
        setTareas(newTareas)
    }
    function handleEliminarTareaS() {
        const newTareas = tareas.filter(tarea => !tarea.isComplete)  // Guarda en el array las tareas que no están completadas.
        setTareas(newTareas)
    }
    return (
        <TaskContext.Provider value={{
            tarea,
            setTarea,
            tareas,
            setTareas,
            mostrarModalAñadirTarea,
            setMostrarModalAñadirTarea,
            accionarTarea,
            handleAddItem,
            mostrarModalEditarTarea,
            setMostrarModalEditarTarea,
            tareaQueSeEdita,
            setTareaQueSeEdita,
            handleEditarTarea,
            eliminarTarea,
            handleEliminarTareaS,
        }}>
            {children}
        </TaskContext.Provider>
    )
}
export { useTareas, TaskProvider }