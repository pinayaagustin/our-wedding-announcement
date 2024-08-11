import './globals.css';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="mb-40">
        <p className="text-3xl font-extrabold text-amber-700">Kukuh Iman Damaryanto</p>
        <p className="text-3xl font-extrabold text-amber-700">&</p>
        <p className="text-3xl font-extrabold text-amber-700">Pinaya Agustin</p>
      </div>

      <p className="text-xl text-gray-700 mb-20">
        Dengan penuh cinta dan sukacita, kami ingin memberikan kabar bahagia yaitu akan dilangsungkannya pernikahan kami pada:
      </p>
      <p className="text-2xl font-semibold text-pink-500 mb-64">
        Jum'at, 6 Desember 2024
      </p>

      <div className="max-w-lg mx-auto flex">
        <form className="space-y-4">
        <h3 className="font-semibold text-amber-700 mb-4">Tulis Disini</h3>
          <div>
            <label className="block text-left text-gray-700 text-sm font-medium mb-2">Nama :</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama Anda" required/>
          </div>

          <div>
            <label className="block text-left text-gray-700 text-sm font-medium mb-2">Ucapan Selamat :</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tulis ucapan selamat Anda disini ..." required></textarea>
          </div>

          <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition duration-300">Kirim</button>
        </form>

        <div>ini nanti isi ucapan yang udah dikirim</div>
      </div>
    </div>
  );
}
