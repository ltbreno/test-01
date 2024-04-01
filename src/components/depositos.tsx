

export default function Depositos() {
    return (
        <div className="flex w-full items-center justify-evenly">
            <div className="flex-col bg-black w-96 h-40 rounded-lg">

                <div className="flex ml-5 justify-between w-11/12 text-white">
                    <h1 className="mt-5 text-white">Depósitos </h1>
                    <h1 className="mt-5 text-white">⬆️</h1>
                </div>

                <div className="flex-col ml-5 mt-5 justify-between w-11/12 ">
                    <h2 className="text-white text-sm">VOLUME: R$ 200.000,00</h2>
                    <h2 className="text-white text-sm">QUANTIDADE: 1.000</h2>
                    <h2 className="text-white text-sm">TICKET MEDIO: R$ 200,00</h2>
                </div>
                
            </div>

            <div className="flex-col bg-black w-96 h-40  rounded-lg">

                <div className="flex ml-5 justify-between w-11/12 text-white">
                        <h1 className="mt-5 text-white">Saques </h1>
                        <h1 className="mt-5">⬆️</h1>
                    </div>

                    <div className="flex-col ml-5 mt-5 justify-between w-11/12 ">
                        <h2 className="text-white text-sm">VOLUME: R$ 100.000,00</h2>
                        <h2 className="text-white text-sm">QUANTIDADE 1000</h2>
                        <h2 className="text-white text-sm">TICKET MEDIO: R$ 100,00</h2>
                    </div>

            </div>

            <div className="flex-col bg-black w-96 h-40  rounded-lg">

                <div className="flex ml-5 justify-between w-11/12 text-white ">
                        <h1 className="mt-5">NET Deposit </h1>
                        <h1 className="mt-5">⬆️</h1>
                    </div>

                    <div className="flex-col ml-5 mt-5 justify-between w-11/12 ">
                        <h2 className="text-white text-sm">VOLUME: R$ 100.000,00</h2>
                        <h2 className="text-white text-sm">QUANTIDADE 1000</h2>
                        <h2 className="text-white text-sm">TICKET MEDIO: R$ 100,00</h2>
                    </div>

            </div>
            
        </div>
    );
  }