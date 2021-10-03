import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const StockForm = ({ register, errors }) => {
    return (
        <ScrollReveal
            variants={slideUp}
            className="rounded-md bg-white md:p-4 p-2"
        >
            <h3 className="font-semibold mb-4 pb-4 border-b-2 border-gray-200">
                Production
            </h3>

            <div className="flex flex-col space-y-2 mb-4">
                <div className=" justify-self-start">
                    <label
                        className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        Production country
                    </label>
                </div>
                <div className="col-span-4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        {...register('productionCountry')}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-2 mb-4">
                <div className=" justify-self-start">
                    <label
                        className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        Product line
                    </label>
                </div>
                <div className="col-span-4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        {...register('productLine')}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-2 mb-4">
                <div className=" justify-self-start">
                    <label
                        className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        main Material
                    </label>
                </div>
                <div className="col-span-4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        {...register('mainMaterial')}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-2 mb-4">
                <div className=" justify-self-start">
                    <label
                        className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        model
                    </label>
                </div>
                <div className="col-span-4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        {...register('model')}
                    />
                </div>
            </div>
        </ScrollReveal>
    )
}

export default StockForm
