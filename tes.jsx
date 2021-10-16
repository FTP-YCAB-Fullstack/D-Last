<div class="flex justify-center items-center w-full bg-blue-400">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Mau Bagiin Cerita apa nih? Yuk sharing ^^</h1>
        <form onSubmit={submit} method="post">
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" >Judul</label>
                <input onChange={(e) => setJudul(e.target.value)} class="border py-2 px-3 text-grey-800" type="text" />
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" >Penulis</label>
                <input onChange={(e) => setPenulis(e.target.value)} class="border py-2 px-3 text-grey-800" type="text" />
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="textarea"> Ini kolom cerita mu! Tulis disini ya ^^</label>
                <textarea onChange={(e) => setDeskripsi(e.target.value)} class="border py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="File"> Thumbnail</label>
                <input class="border py-2 px-3 text-grey-800" type="file" filename="thumbnail" onChange={getImg}/>
                <div className="md:w-1/3">
                    <input type="submit" value="Kirim" className="shadow bg-green-600 mr-12 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
                    <button onClick={() => props.close(false)} className="shadow bg-red-400 hover:bg-red-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Batal
                    </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    </div>
</div>