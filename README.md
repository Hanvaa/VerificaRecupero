# Verifica di teoria su NODEJS del 24 Novembre 2023

## OBIETTIVI
La verifica verificherà le compentenze dello studente in merito alla creazione di un web services nodejs, al collegamento client - server e all'aggiornamento dell'interfaccia client in base ai dati restituiti.

### VALUTAZIONE
- Creazione del server: 4 punti/8 punti
    (Di tutti i servizi, il settimo è quello che vale di più (quasi la metà del punteggio))

- Connessione client - server: 1.5 punto/8 punti

- Aggiornamento client (creazione dinamica): 2.5 punti/8 punti


### LATO CLIENT
1. Caricare le select presenti nel file html con rispettivamente i seguenti dati:
    - numero utente
    - nome del negozio (senza ripetizioni)
    - nome del prodotto (senza ripetizioni)

2. Inviare al server in POST i dati relativi alla spesa da aggiungere. Nello specifico è necessario permettere l'associazione di più prodotti per una singola spesa.

3. Riempire i canvas presenti sulla pagina con i 6 grafici indicati nel paragrafo successivo richiedendo al server i dati corretti e fornendo in GET quanto serve al server. 
    > Nel caso in cui  ci siano dati aggiuntivi da inviare al server è possibile modificare l'html aggiungendo i tag necessari o usare prompt.

    > Il tipo del grafico lo puoi vedere al punto 3 del prossimo paragrafo quando vengono elencate le descrizioni dei grafici.

### LATO SERVER
1. Creare un server HTTP nodejs in grado di rispondere al client riguardante i grafici e sia in grado di inserire in coda i dati di una nuova spesa. 

2. Esporre un servizio che raccolti i dati mandati dal client in POST vada ad inserire una nuova spesa in coda al vettore associativo presente nel file dati.json

3. Esporre un servizio per ognuno dei 6 grafici dopo aver letto ed elaborato in modo opportuno il file dati.json:
    - Restituire per ogni spesa la data e la somma dei singoli costi dei prodotti moltiplicati per la quantità acquistata, _al fine di avere il massimo del punteggio il grafico deve essere a linee (line)._
        + Ignorare i prodotti che non hanno il costo.
        + Ignorare le quantità superiori a 10.

    - Ritornare quanti prodotti sono alimentari e quanti lo sono, _al fine di avere il massimo del punteggio il grafico deve essere a torta (pie)._
       > I prodotti non alimentari non devono contenere i termini presenti nel seguente vettore.
       ```
        ["colori", "gel", "dentifricio", "disgorgante", "carta", "pellicola", "sgrassatore", "fertilizzante", "candeggina", "ammorbidente", "ammorbidente", "tovaglioli", "sacchetti", "tenda"]
       ```

    - Ritornare i negozi e per ognuno quanto si è speso in totale, _al fine di avere il massimo del punteggio il grafico deve essere a torta (pie)._ 

    - Ritornare quanto si è speso per ogni mese (dal mese 06 a mese 11), _al fine di avere il massimo del punteggio il grafico deve essere a polarArea._ 

    - Ritornare quanti prodotti e quante volte sono stati ascquistati dall'utente il cui codice è stato richiesto dal client, _al fine di avere il massimo del punteggio il grafico deve essere a polarArea._ 
