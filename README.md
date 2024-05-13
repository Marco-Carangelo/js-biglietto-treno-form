# js-biglietto-treno-form

Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Utilizzate Bootstrap come libreria UI.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

Creazione interfaccia grafica:

-La pagina HTML avrà due parti, un'intestazione con il titolo dell'esercizio ed una sezione principale, che a sua volta sara divisa in due parti, una conterrà il form per l'inserimento dei dati da parte dell'utente e l'altra conterrà un campo che visualizzerà il risultato.
-Il form conterrà due campi, uno per inserire l'età e l'altro per la distranza da percorrere. Per l'età si potrebbe usare un campo range, in modo da importare facilmente un'età minima (1) ed un'età massima (122 che è l'età più alta mai registrata). Per la distanza si potrebbe usare un normale campo numerico e si potrebbe validare il dato successivamente per evitare valori negativi.
-Per il risultato si userà un campo di testo  