export const TextInputEmail = () => {
    return (
        <div className="inline-flex items-center flex-col">
            <div className="w-full relative">
                <input className="appearance-none bg-transparent border-b-2 border-b-icon-color w-full text-text-primary-color text-center text-base mr-3 py-1 px-10 mt-8 leading-tight focus:outline-none " placeholder="Lorem Ipsum" ></input>
            </div>
            <div>
                <p className="text-sm font-medium text-text-primary-color">Email</p>
            </div>
        </div>
    )
}