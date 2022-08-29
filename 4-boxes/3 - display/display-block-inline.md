## display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

| **block**                                                     	| **inline**                                              	|
|---------------------------------------------------------------	|---------------------------------------------------------	|
| Ocupa toda a linha, colocando o próximo elemento abaixo desse 	| Elemento ao lado do outro                               	|
| width e heigth são respeitados                                	| width e heigth não funcionam                            	|
| padding, margin, border irão funcionar normalmente.           	| Somente valores horizontais de margin, padding e border 	|


exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`
