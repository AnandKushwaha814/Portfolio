const ServicesLayout = ({title, icon, description}) => {
    return (
        <>
            <section className="max-w-2xl mx-auto">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full m-10 text-center rounded-lg p-10 shadow-custom-blue transition-all duration-400 ease-in-out hover:bg-blue-600 hover:text-white">
                        <div className="w-[4rem] h-[4rem] shadow-custom-blue rounded-full mx-auto mb-4 text-white flex items-center justify-center text-lg transition-all duration-400 ease-in-out hover:bg-white hover:text-blue-600">
                           {icon}
                        </div>
                        <div className="text-xl font-semibold">{title}</div>
                        <p className="mt-2 text-white font-serif text-left">
                            {description}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesLayout
