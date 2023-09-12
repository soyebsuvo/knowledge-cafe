import profile from "../../assets/images/profile.png"

export default function Header() {
    return (
        <div className="flex justify-between py-4 items-center border-b-2">
            <h1 className="text-3xl font-bold cursor-pointer">Knowledge Cafe</h1>
            <img className="w-12 cursor-pointer" src={profile} alt="" />
        </div>
    )
}
