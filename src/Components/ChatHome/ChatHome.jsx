import { useEffect, useRef, useState } from "react"
import IngredientsList from "../IngredientsList/IngredientsList.jsx"
import ClaudeRecipe from "../RecipeBody/ClaudeRecipe.jsx"
import { getRecipeFromMistral } from "../../Components/ai/AI.js"
import tastyMundoLogo from '../../assets/tastyMundo.png'
import { Link } from "react-router-dom"


export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    
    const handleSubmit = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    };

    const [recipe,setRecipe] = useState("")

    const recipeSection = useRef(null)

    useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {

            const yCoord = recipeSection.current.getBoundingClientRect().top;
            window.scroll({
                top: yCoord,
                behavior : "smooth"
            })
        }
        
    },[recipe])

    const getRecipe = async () => {
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
            setRecipe(recipeMarkdown);
        } catch (err) {
            console.error("Error in getRecipe:", err.message);
        }
    };


    const side = document.querySelector('.side');
    const head = document.querySelector('.head');
    const mybody = document.querySelector('.mybody');
    const show = document.querySelector('.show')
    

    const hideSideBar = () => {

        side.classList.add('translate-x-[-100%]', 'transition-transform', 'duration-500');
        head.classList.add('translate-x-[100%]', 'transition-transform', 'duration-500');
        mybody.classList.add('w-fit','absolute', 'transition-transform', 'duration-500');

        setTimeout(() => {
            side.classList.add('hidden');
            head.classList.add('hidden');
        }, 500);
    };


    const showSideBar = () => {

        side.classList.remove('hidden');
        head.classList.remove('hidden');
        mybody.classList.remove('w-fit','absolute');

        setTimeout(() => {

            side.classList.remove('translate-x-[-100%]');
            head.classList.remove('translate-x-[100%]');
        }, 10);
    };

    const takeaction = document.querySelector('.takeaction')
    const takeactionbox = document.querySelector('.takeactionbox')

    const takeAction = () => {
        if(takeactionbox.classList.contains('hidden')) {
            takeactionbox.classList.remove('hidden')
        } else {
            takeactionbox.classList.add('hidden')
        }
        
    }

    const setting = document.querySelector('.setting')
    const settingactionbox = document.querySelector('.settingactionbox')

    const settingAction = () => {
        if(settingactionbox.classList.contains('hidden')) {
            settingactionbox.classList.remove('hidden')
        } else {
            settingactionbox.classList.add('hidden')
        }
        
    }
    
    document.addEventListener('click', (event) => {
        if (!settingactionbox || !setting) return;
        if (!takeactionbox || !takeaction) return;

        if (
            !takeactionbox.contains(event.target) &&
            !takeaction.contains(event.target)
        ) {
            takeactionbox.classList.add('hidden');
        }

        if (
            !settingactionbox.contains(event.target) &&
            !setting.contains(event.target)
        ) {
            settingactionbox.classList.add('hidden');
        }
    });

    const [saved, setSaved] = useState([
        {id:1, title: "Mixing Sugar and Other Ing"},
        {id:2, title: "Mixing cassava and Other Ing"},
        {id:3, title: "Mixing yams and Other Ing"},
        {id:4, title: "Mixing Sugar and Other Ing"},
        {id:5, title: "Mixing cassava and Other Ing"},
        {id:6, title: "Mixing Sugar and Other Ing"},
        {id:7, title: "Mixing cassava and Other Ing"},
        {id:8, title: "Mixing Sugar and Other Ing"},
        {id:9, title: "Mixing cassava and Other Ing"},
        {id:10, title: "Mixing Sugar and Other Ing"},
        {id:11, title: "Mixing cassava and Other Ing vwafuvtiiyvity"},
    ])



    

    return (
        <main className="flex flex-row overflow-hidden">
            <div className="w-1/4 flex flex-col justify-between h-fit z-10">
                {/* side bar header */}
                <div className="bg-gray-900 h-screen fixed p-5 flex flex-col justify-between side transition-transform duration-500">
                    <div className="flex flex-row items-center justify-between ">
                        <Link className="cursor-pointer" to={'/'}>
                            <img src={tastyMundoLogo} alt="App Logo" className="w-10"/>
                        </Link>
                        <svg onClick={hideSideBar} className="size-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                    </div>
                    <Link to={'/aichat'}>
                        
                        <div className="flex flex-row justify-between flex-wrap bg-gray-800 rounded-md p-3 cursor-pointer hover:bg-gray-700 transition duration-150 ease-in active:bg-gray-500">
                            Begin a new Chat
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </Link>
                    
                    <div className="flex flex-col flex-nowrap bg-gray-900 rounded-md p-1 overflow-y-scroll h-3/5">
                        <h4 className="font-poppins text-md">Recent Chats</h4>
                        <div>
                            {saved.map((saved) => (
                                <div key={saved.id} className="max-w-full overflow-hidden"> 
                                    <div className="z-10 items-center justify-between min-w-0 relative flex flex-row truncate mb-2 mt-1 cursor-pointer bg-primaryBody hover:bg-gray-800 active:bg-gray-700 transition duration-100 ease-in p-2 rounded-md">
                                        <div className="w-[220px] flex flex-row">
                                            <svg className="flex-shrink-0 mr-1 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                            </svg>
                                            <h5 className="titleh5 w-[220px] truncate flex-1 min-w-0">{saved.title}</h5>
                                        
                                        </div>
                                        <svg onClick={settingAction} className="flex-shrink-0 setting ml-3 size-6 hover:border border-gray-400 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </div>
                                    
                                    <div className="z-20 hidden settingactionbox  w-fit bg-primaryBody p-2 rounded-md absolute -mt-6 -mr-7 right-0 border border-gray-500">
                                        <button className="flex rounded-md p-1 mb-1 hover:bg-gray-700 active:bg-gray-500 w-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            Edit
                                        </button>
                                        {/* <hr/> */}
                                        <button className="flex rounded-md p-1 hover:bg-gray-700 active:bg-gray-500 mt-1 text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            Delete
                                        </button>
                                    </div>
                                    
                                    
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className="flex flex-row flex-wrap justify-between bg-gray-800 rounded-md bottom-6 p-3 cursor-pointer hover:bg-gray-700 transition duration-150 ease-in active:bg-gray-500">
                        <div className="flex flex-row">
                            <svg className="size-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                            User Profile
                        </div>
                        <div className="relative">
                            <svg onClick={takeAction} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="takeaction size-6">
                                <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
                                <path fillRule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z" clipRule="evenodd" />
                            </svg>
                            <div className="z-10 hidden takeactionbox w-fit bg-primaryBody p-2 rounded-md absolute -mt-28 -mr-32 right-0 border border-gray-500">
                                <button className="flex rounded-md p-1 mb-1 hover:bg-gray-700 active:bg-gray-500 w-full">
                                    Edit
                                </button>
                                <button className="flex text-nowrap rounded-md p-1 hover:bg-gray-700 active:bg-gray-500 mt-1">
                                    Help & Support
                                </button>
                            </div>
                        </div>
                        

                    </div>
                </div>
                
            </div>
            
            <svg onClick={showSideBar} className="fixed show size-6 cursor-pointer  z-20 m-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
            <div className="z-5 mybody w-3/4 flex flex-wrap flex-col justify-between items-center border-gray-800 transition-transform duration-500">

                <div className="transition-transform duration-500 head fixed rounded-3xl bg-slate-600 p-2 pr-5 pl-5 mt-6 w-fit right-5">
                    <ul className='flex'>
                        <Link className='mr-5 hover:text-primaryColor transition ease-in-out duration-200' to={'/'}>Home</Link>
                        <Link className='mr-5 hover:text-primaryColor transition ease-in-out duration-200' to={'/aboutus'}>About Us</Link>
                        <Link className='hover:text-primaryColor transition ease-in-out duration-200' to={'/services'}>Services</Link>
                    </ul>
                </div>
                

                {ingredients.length ? 
                    <IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />
                    : 
                    <div className="flex flex-col justify-center items-center">
                        <img src={tastyMundoLogo} alt="TastyMundo Logo" className="w-20" />
                        <h4 className="font-poppins font-semibold text-3xl">What can we assist you Today?</h4>
                        <p className="w-3/4 text-center mt-5 text-gray-400 font-semibold">Get AI-powered culinary assistance tailored to your needs! Our intelligent agents specialize in recipe creation, meal planning, and ingredient optimization. Choose your perfect cooking companion and start crafting delicious dishes effortlessly.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 place-items-center gap-3">
                            <div className="smallText border border-gray-500 rounded-md p-3 bg-gray-900">
                                <div className="flex flex-row justify-between mb-3 ">
                                    <h4 className="font-poppins font-semibold text-md text-gray-200">Making Soda Juice</h4>
                                    <svg className="size-6 border rounded-full p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                    </svg>
                                </div>
                                <p className="text-gray-300">Get The Tailed advice on increasing your cooking capacity</p>
                            </div>
                            <div className="smallText border border-gray-500 rounded-md p-3 bg-gray-900">
                                <div className="flex flex-row justify-between mb-3">
                                    <h4 className="font-poppins font-semibold text-md text-gray-200">Making Soda Juice</h4>
                                    <svg className="size-6 border rounded-full p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                    </svg>
                                </div>
                                <p className="text-gray-300">Get The Tailed advice on increasing your cooking capacity</p>
                            </div>
                            <div className="smallText border border-gray-500 rounded-md p-3 bg-gray-900">
                                <div className="flex flex-row justify-between mb-3">
                                    <h4 className="font-poppins font-semibold text-md text-gray-200">Making Soda Juice</h4>
                                    <svg className="size-6 border rounded-full p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                    </svg>
                                </div>
                                <p className="text-gray-300">Get The Tailed advice on increasing your cooking capacity</p>
                            </div>
                            <div className="smallText border border-gray-500 rounded-md p-3 bg-gray-900">
                                <div className="flex flex-row justify-between mb-3">
                                    <h4 className="font-poppins font-semibold text-md text-gray-200">Making Soda Juice</h4>
                                    <svg className="size-6 border rounded-full p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                    </svg>
                                </div>
                                <p className="text-gray-300">Get The Tailed advice on increasing your cooking capacity</p>
                            </div>
                        </div>
                    </div>
                }
                {recipe && <ClaudeRecipe recipe={recipe} />}
                <form action={handleSubmit} autoComplete="off" className="bg-primaryBody w-2/4 flex flex-row fixed bottom-5">
                    <input
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        name="ingredient"
                        className="rounded-md border-2 p-2 shadow flex-grow bg-gray-800 outline-none mr-2"
                    />
                    <button className="rounded-md bg-gray-800 text-white p-3">Add ingredient</button>
                </form>
                
            </div>
            
        </main>
        
    );
}