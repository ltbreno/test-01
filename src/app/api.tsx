import { useEffect, useState } from 'react';

export const ConsumoApi: React.FC = () => {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/elementos');
      const data = await response.json();
      setElementos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Elementos:</h1>
      <ul>
        {elementos.map((elemento: any) => (
          <li key={elemento.id}>{elemento.nome}</li>
        ))}
      </ul>
    </div>
  );
};
