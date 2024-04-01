export default function Ftds() {
    return (
        <div className="flex w-full items-center mt-10 justify-evenly">
            <div className="flex-col bg-black w-96 h-40 rounded-lg">

                <div className="flex ml-5 justify-between w-11/12 text-white">
                    <h1 className="mt-5 text-white">FTDs </h1>
                    <h1 className="mt-5 text-white">⬆️</h1>
                </div>

                <div className="flex-col ml-5 mt-5 justify-between w-11/12 ">
                    <h2 className="text-white text-sm">VOLUME: R$ 50.000,00</h2>
                    <h2 className="text-white text-sm">QUANTIDADE: 500</h2>
                    <h2 className="text-white text-sm">TICKET MEDIO: R$ 100,00</h2>
                </div>
                
            </div>

            <div className="flex-col bg-black w-96 h-40  rounded-lg">

                <div className="flex ml-5 justify-between w-11/12 text-white">
                        <h1 className="mt-5 text-white">Usuários </h1>
                        <h1 className="mt-5">⬆️</h1>
                    </div>

                    <div className="flex-col ml-5 mt-5 justify-between w-11/12 ">
                        <h2 className="text-white text-sm">Registros: 1.500</h2>
                        <h2 className="text-white text-sm">KYC 250</h2>
                        <h2 className="text-white text-sm">BLOQUEADOS: 5</h2>
                    </div>

            </div>

            <div className="flex-col bg-black w-96 h-40  rounded-lg">

                <div className="flex ml-5 justify-between w-11/12 text-white ">
                        <h1 className="mt-5">Carteiras </h1>
                        <h1 className="mt-5">⬆️</h1>
                    </div>

                    <div className="flex-col ml-5 mt-5 justify-between w-11/12 ">
                        <h2 className="text-white text-sm">REAL: R$ 100.000,00</h2>
                        <h2 className="text-white text-sm">BONUS: R$ 760.000,00</h2>
                        <h2 className="text-white text-sm">DEMO: R$ 250.000,00</h2>
                    </div>

            </div>
            
        </div>
    );
  }