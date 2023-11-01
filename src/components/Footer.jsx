export default function Footer() {
  return (
    <main className="px-32 py-24 bg-[url('./images/akatsuki.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="flex">
        <div className="w-1/3 flex flex-col gap">
          <h1 className="text-2xl font-bold text-white">
            BRRT-BRRT JUTSU 2023 🔥
          </h1>
          <h2 className="text-2xl font-thin text-white">MADE WITH TEAM EMCY</h2>
          <p className="text-white text-sm">
            Kung di mo kayang ispotcheck, Ipa Spot mo na sa PR.
          </p>
        </div>
        <div className="w-2/3 flex gap-2">
          <div className="w-1/3">
            <h3 className="text-white text-sm font-bold">Dikit Marichris</h3>
            <p className="text-white">(Associate Process Manager)</p>
            <label className="text-white">0945-317-6039</label>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-sm font-bold">Ryan Pasquin</h3>
            <p className="text-white">(Process Manager)</p>
            <label className="text-white">0920-945-4626</label>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-sm font-bold">Daryl Taguilaso</h3>
            <p className="text-white">(Senior Process Manager)</p>
            <label className="text-white">0917-109-1477</label>
          </div>
        </div>
      </div>
    </main>
  );
}
