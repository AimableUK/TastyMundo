
const IngredientsList = (props) => {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li className="text-gray-300" key={ingredient}>{ingredient}</li>
    ));

    return (
        <section className="flex flex-col w-screen h-screen z-0 pl-24">
            <h2 className="font-poppins font-semibold text-xl mb-5 mt-10">Ingredients on hand:</h2>
            <ul type="" className="" aria-live="polite">{ingredientsListItems}</ul>

            {props.ingredients.length > 3 && (
                <div className="w-fit flex justify-between items-center rounded-md bg-gray-300 p-4 gap-3 mt-10">
                    <div ref={props.ref}>
                        <h3 className="text-gray-900 font-semibold text-2xl">Ready for a recipe?</h3>
                        <p className="font-2xl text-gray-600">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="outline-none rounded-md bg-primaryColor shadow-md  p-2 pl-3 pr-3 font-semibold text-md cursor-pointer" onClick={() => {props.getRecipe(); }}>
                        Get a recipe
                    </button>
                </div>
            )}
            
        </section>
    );
};

export default IngredientsList;
