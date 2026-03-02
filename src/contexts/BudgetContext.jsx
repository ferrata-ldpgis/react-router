import { createContext, useContext, useState } from "react";

const BudgetContext = createContext({});

//Componente di Provider per wrappare in _app.js e condividere con tutti i componenti

//Caso di boolean: budgetMode = true => mostra solo prodotti <= 50, altrimenti mostra tutti
// function BudgetProvider({ children }) {

// 	const [budgetMode, setBudgetMode] = useState(false);

// 	const datiDaCondividere = { budgetMode, setBudgetMode };

// 	return <BudgetContext.Provider value={datiDaCondividere}>
// 		{children}
// 	</BudgetContext.Provider>
// }

// Caso di numero: maxPrice = 50 => mostra solo prodotti <= 50, altrimenti mostra tutti
function BudgetProvider({ children }) {

	const [maxPrice, setMaxPrice] = useState(null); // inizialmente null

    const datiDaCondividere = { maxPrice, setMaxPrice };

    return (
        <BudgetContext.Provider value={datiDaCondividere}>
            {children}
        </BudgetContext.Provider>
    );
}

//Custom Hook da importare per consumare i dati
function useBudget() {
	return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };
