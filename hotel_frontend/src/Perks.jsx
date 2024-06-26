export default function Perks({selected,onChange}){

    function handelCBClick(e){
        const {checked,name}=e.target;
        if(checked){
            onChange([...selected,name]);
        }else{
            onChange([...selected.filter(selectedName=>selectedName!==name)]);
        }
    }
    return(
        <>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" checked={selected.includes("wifi")} name="wifi" onClick={handelCBClick}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"W="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round"L="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                            </svg>
                            <span>Wifi</span>
                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" checked={selected.includes("TV")} name="TV" onClick={handelCBClick}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"W="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round"L="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                            <span>TV</span>
                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" checked={selected.includes("Pets")} name="Pets" onClick={handelCBClick}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"W="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round"L="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>

                            <span>Pets</span>
                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" checked={selected.includes("AC")} name="AC" onClick={handelCBClick}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"W="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round"L="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                            </svg>

                            <span>AC</span>
                        </label>
                        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                            <input type="checkbox" checked={selected.includes("Parking")} name="Parking" onClick={handelCBClick}></input>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <span>Parking</span>
                        </label>
        </>
    );
}