import { Cart } from "../ui/Cart"
import { Porque } from "../ui/Porque"

export const Elejir = () => {
    return (
        <div className="w-full bg-white min-h-[70vh] py-10 flex flex-col justify-center items-center">
            <Porque/>
            <Cart/>
        </div>
    )
}
