export function Form() {
    return (
        <div className="w-full max-w-[900px] p-10">
            <h1 className="bg-[#000] text-[#fff] px-8 py-2">Contate-me</h1>
            <form className="flex flex-col max-w-[900px] border-[var(--bg-default)] min-h-[300px] h-fit border-[1px] rounded-[12px] mt-[20px] inset-3 shadow-[inset_0_0_12px_#0004] p-[30px] gap-[30px]" action="">
                <div className="flex flex-col w-full relative mt-[20px]">
                    <label className="pointer-events-none  absolute top-[0px]" htmlFor="">Your Name</label>
                    <input className="bg-transparent border-b-[2px] border-b-[#bdbdbd] outline-none valid:border-[#5b5b5b] focus:border-[#5b5b5b]" required type="text" />
                </div>
                <div className="flex flex-col w-full relative">
                    <label className="pointer-events-none  absolute top-[0px]" htmlFor="">Your Email</label>
                    <input className="bg-transparent border-b-[2px] border-b-[#bdbdbd] outline-none valid:border-[#5b5b5b] focus:border-[#5b5b5b]" required type="text" />
                </div>
                <a href="" className="text-[#000] underline">or use your google account</a>
                <textarea className="bg-transparent" name="" id="">

                </textarea>
            </form>
        </div>
    )
}