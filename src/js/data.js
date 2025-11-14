// js/data.js - Sample tree data

const sampleCSV = `ID,TYPE_LIEU,NOM_LATIN,NOM_FRANCAIS,TYPE_ARBRE,DIAMETRE,POSITION_MESURE,MULTI_TRONC,DATE_PLANTE,TYPE_PROP,NOM_TOPOGRAPHIE,LATITUDE,LONGITUDE
7173,tronçon,Acer saccharinum,érable argenté,Feuillu,113,DHP,N,,Public,Avenue De Bougainville,46.8001047363278,-71.23601964405196
7174,tronçon,Acer saccharinum,érable argenté,Feuillu,127,DHP,N,,Public,Avenue De Bougainville,46.800029579765145,-71.2359287739067
7195,tronçon,Ulmus americana,orme d'Amérique,Feuillu,64,DHP,N,,Public,Avenue De Bougainville,46.79929476805374,-71.23506247237843
7196,tronçon,Ulmus americana,orme d'Amérique,Feuillu,84,DHP,N,,Public,Avenue De Bougainville,46.79925379986784,-71.23501040286277
7197,tronçon,Ulmus americana,orme d'Amérique,Feuillu,54,DHP,N,,Public,Avenue De Bougainville,46.799214417834335,-71.23495789650484
7198,tronçon,Ulmus americana,orme d'Amérique,Feuillu,99,DHP,N,,Public,Avenue De Bougainville,46.799162287458124,-71.23489984540255
7200,tronçon,Ulmus americana,orme d'Amérique,Feuillu,123,DHP,N,,Public,Avenue De Bougainville,46.799012848519624,-71.23472318040344
7202,tronçon,Ulmus americana,orme d'Amérique,Feuillu,69,DHP,N,,Public,Avenue De Bougainville,46.798853017820264,-71.2345325932326
7203,tronçon,Ulmus americana,orme d'Amérique,Feuillu,88,DHP,N,,Public,Avenue De Bougainville,46.798706935350694,-71.23435571393219
7204,tronçon,Ulmus americana,orme d'Amérique,Feuillu,101,DHP,N,,Public,Avenue De Bougainville,46.798666610084474,-71.23431416084054
7205,tronçon,Ulmus americana,orme d'Amérique,Feuillu,57,DHP,N,,Public,Avenue De Bougainville,46.79863309955909,-71.23427752148633
7217,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,86,DHP,N,,Public,Avenue De Bougainville,46.79767755647379,-71.23314869812482
7218,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,86,DHP,N,,Public,Avenue De Bougainville,46.79763842589712,-71.23310595774488
7219,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,71,DHP,N,,Public,Avenue De Bougainville,46.7976041370116,-71.23306577222192
7239,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,69,DHP,N,,Public,Avenue De Bougainville,46.797583775506375,-71.23304089351808
7240,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,83,DHP,N,,Public,Avenue De Bougainville,46.79754143110071,-71.23299285647319
7241,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,84,DHP,N,,Public,Avenue De Bougainville,46.79749156361891,-71.23293249488633
7242,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,101,DHP,N,,Public,Avenue De Bougainville,46.79744959989864,-71.23288260295533
7252,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,78,DHP,N,,Public,Avenue De Bougainville,46.79869276136827,-71.23461717666626
7253,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,63,DHP,N,,Public,Avenue De Bougainville,46.79867574263456,-71.23459856508426
7254,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,65,DHP,N,,Public,Avenue De Bougainville,46.79865550825039,-71.23457916302328
7255,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,51,DHP,N,,Public,Avenue De Bougainville,46.798640384395554,-71.23456247682029
7256,tronçon,Ulmus americana,orme d'Amérique,Feuillu,83,DHP,N,,Public,Avenue De Bougainville,46.798614498555494,-71.23452791926071
7257,tronçon,Ulmus americana,orme d'Amérique,Feuillu,67,DHP,N,,Public,Avenue De Bougainville,46.79853374370443,-71.2344330474242
7258,tronçon,Ulmus americana,orme d'Amérique,Feuillu,79,DHP,N,,Public,Avenue De Bougainville,46.798491845142415,-71.23438432017569
7259,tronçon,Ulmus americana,orme d'Amérique,Feuillu,96,DHP,N,,Public,Avenue De Bougainville,46.79845301322988,-71.23433436398655
7260,tronçon,Ulmus americana,orme d'Amérique,Feuillu,79,DHP,N,,Public,Avenue De Bougainville,46.79840894574696,-71.23428434974359
7266,tronçon,Acer saccharinum,érable argenté,Feuillu,105,DHP,N,,Public,Avenue De Bougainville,46.79798383430973,-71.23379530975747
7673,tronçon,Abies alba,Sapin blanc,Conifère,56,DHP,N,,Public,Avenue Champfleury,46.8415987851581,-71.2266798530773
11445,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,129,DHP,N,,Privés:S.I.Q.,Ilot SIQ-Édifice 'MCC',46.803423849864075,-71.22137235765159
11461,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,107,DHP,N,,Public,Grande Allée Ouest,46.80168913395795,-71.2247457452668
25392,tronçon,Ulmus americana,orme d'Amérique,Feuillu,94,DHP,N,,Public,Grande Allée Est,46.80522221592867,-71.21865807044688
38382,tronçon,Quercus rubra,chêne rouge,Feuillu,80,DHP,N,,Public,Avenue Moncton,46.79956836539046,-71.23198729053912
38389,tronçon,Acer saccharinum,érable argenté,Feuillu,136,DHP,N,,Public:Arbre mitoyen,Avenue Moncton,46.79924730970397,-71.2316398054291
38390,tronçon,Acer saccharinum,érable argenté,Feuillu,112,DHP,N,,Public,Avenue Moncton,46.798933506687234,-71.23095673495509
38421,tronçon,Acer saccharinum,érable argenté,Feuillu,102,DHP,N,,Public,Avenue du Parc,46.80019299903738,-71.22865253561896
65084,Lieu public,Quercus macrocarpa,chêne à gros fruits,Feuillu,105,DHP,N,,Privés:Entretien Privé,Cathédrale Anglicane Ste-Trinité,46.81260414516216,-71.20623496341175
65087,Lieu public,Quercus macrocarpa,chêne à gros fruits,Feuillu,140,DHP,N,,Privés:Entretien Privé,Cathédrale Anglicane Ste-Trinité,46.81290668331097,-71.20624838503163
65103,Lieu public,Quercus macrocarpa,chêne à gros fruits,Feuillu,107,DHP,N,,Privés:Entretien Privé,Cathédrale Anglicane Ste-Trinité,46.81281695159526,-71.20732961780557
72347,Lieu public,Populus X berolinensis,peuplier de Berlin,Feuillu,79,DHP,N,,Privés:S.I.Q.,Ilot SIQ-1650 Sir-Louis-Jetté,46.79453106056804,-71.26649648001458
79670,Lieu public,Juglans nigra,noyer noir,Feuillu,58,DHP,N,,Public:Terrain Privé,Ilot Fontaine Wallace,46.80219608882944,-71.2242657740251
79671,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,77,DHP,O,,Public:Terrain Privé,Ilot Fontaine Wallace,46.80205671412486,-71.22417085826889
92718,tronçon,Acer saccharinum,érable argenté,Feuillu,92,DHP,N,,Privés,Avenue Belvédère,46.79522643211645,-71.23731942970525
92719,tronçon,Acer saccharinum,érable argenté,Feuillu,102,DHP,N,,Privés,Avenue Belvédère,46.7953196668906,-71.23742760942221
99923,tronçon,Acer saccharinum,érable argenté,Feuillu,185,DHS,N,,Public:Entretenu Par La Ville,Avenue du Monument,46.849532560439386,-71.208980615066
99924,tronçon,Acer saccharinum,érable argenté,Feuillu,125,DHP,N,,Public:Entretenu Par La Ville,Avenue du Monument,46.84968930429504,-71.20918384200331
99925,tronçon,Acer saccharinum,érable argenté,Feuillu,125,DHS,N,,Public:Entretenu Par La Ville,Avenue du Monument,46.849597080785315,-71.20906508463527
112344,tronçon,Sorbus intermedia,sorbier de Suède,Feuillu,81,DHS,N,,Public,68e Rue Ouest,46.854869644536464,-71.2633683046009
117348,Lieu public,Picea glauca,épinette blanche,Conifère,24,M,O,,Public:Sans entretien,Parc Armand-Paris,46.88552751626868,-71.18609673564622
123883,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,149,DHP,N,,Public,Boulevard Louis-XIV,46.86645661061402,-71.2624960698141
202950,tronçon,Ulmus americana,orme d'Amérique,Feuillu,113,DHP,N,,Privés,Grande Allée Est,46.80580755787772,-71.21768756497579
203043,tronçon,Ulmus americana,orme d'Amérique,Feuillu,117,DHP,N,,Privés,Grande Allée Est,46.80687586598636,-71.21577080082658
203217,tronçon,Ulmus americana,orme d'Amérique,Feuillu,89,DHP,N,,Privés,Grande Allée Ouest,46.79307332047206,-71.23818254232182
204481,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,89,DHP,N,,Privés,Avenue Briand,46.80159066970542,-71.22258992307863
204482,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,39,DHP,N,,Privés,Avenue Briand,46.80163592371233,-71.2225924548647
204483,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,37,DHP,N,,Privés,Avenue Briand,46.801622152829125,-71.22257493763063
204501,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,34,M,O,,Privés,Grande Allée Ouest,46.80159029124316,-71.22453814003295
204504,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,34,M,O,,Privés,Grande Allée Ouest,46.80154713299973,-71.22461383555334
204535,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,92,DHP,N,,Privés,Ilot Fabrique St-Dominique,46.80137661963976,-71.22489153006342
204537,tronçon,Ulmus americana,orme d'Amérique,Feuillu,144,DHP,N,,Privés,Grande Allée Ouest,46.80115236431182,-71.225252465404
204624,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,52,DHP,N,,Privés,Grande Allée Ouest,46.80186317196136,-71.22520839426923
204660,tronçon,Ulmus americana,orme d'Amérique,Feuillu,107,DHP,N,,Privés,Grande Allée Ouest,46.8008818006448,-71.22620529383299
204708,tronçon,Ulmus americana,orme d'Amérique,Feuillu,110,DHP,N,,Privés,Grande Allée Ouest,46.80221477543159,-71.22456977886559
204709,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,61,DHP,N,,Privés,Grande Allée Ouest,46.80229583891159,-71.22434004786949
204765,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,61,DHP,N,,Privés,Ilot Maison Henry-Stuart,46.80239494166742,-71.2236093132368
205531,tronçon,Ulmus americana,orme d'Amérique,Feuillu,105,DHP,N,,Privés,Grande Allée Ouest,46.79614311267927,-71.23348345202734
205542,tronçon,Ulmus americana,orme d'Amérique,Feuillu,121,DHP,N,,Privés,Grande Allée Ouest,46.796080249259234,-71.23236744855711
205552,tronçon,Ulmus americana,orme d'Amérique,Feuillu,101,M,O,,Privés,Grande Allée Ouest,46.794894201467294,-71.23231452120473
205557,tronçon,Ulmus americana,orme d'Amérique,Feuillu,111,DHP,N,,Privés,Grande Allée Ouest,46.7948301588497,-71.23241949657049
206334,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,37,DHP,N,,Privés,Grande Allée Ouest,46.802103707055345,-71.22316703908315
206470,tronçon,Ulmus americana,orme d'Amérique,Feuillu,156,DHP,N,,Privés,Avenue du Cardinal-Bégin,46.79480966821294,-71.23950646631764
206479,tronçon,Ulmus americana,orme d'Amérique,Feuillu,126,DHP,N,,Privés,Avenue du Cardinal-Bégin,46.79460708491603,-71.23923655349692
206616,tronçon,Ulmus americana,orme d'Amérique,Feuillu,131,DHP,N,,Privés,Grande Allée Ouest,46.79151423285499,-71.24333588812124
206652,tronçon,Ulmus glabra 'Camperdownii',orme parasol 'Camperdownii',Feuillu,64,DHP,N,,Privés,Rue de Bridgewater,46.76242185767133,-71.27588704970378
206963,tronçon,Ulmus americana,orme d'Amérique,Feuillu,131,DHP,N,,Privés,Rue Sainte-Anne,46.813044067633285,-71.21005355125102
207259,tronçon,Ulmus americana,orme d'Amérique,Feuillu,105,DHP,N,,Privés,Avenue Oak,46.778949599459146,-71.25104746166721
207325,tronçon,Ulmus americana,orme d'Amérique,Feuillu,126,DHP,N,,Privés,Avenue Chaumont,46.79097751812924,-71.24048891972728
207541,tronçon,Ulmus americana,orme d'Amérique,Feuillu,121,DHP,N,,Privés,Chemin Saint-Louis,46.7669528578765,-71.27116577112604
207550,tronçon,Ulmus americana,orme d'Amérique,Feuillu,97,DHP,N,,Privés,Avenue De Bougainville,46.79811214666969,-71.23449573374563
207561,tronçon,Ulmus americana,orme d'Amérique,Feuillu,104,DHP,N,,Privés,Rue Sheppard,46.78520495129659,-71.24663533768721
207598,tronçon,Ulmus pumila,orme de Sibérie,Feuillu,88,DHP,N,,Public,Chemin Saint-Louis,46.76589467176565,-71.27473047757172
207627,tronçon,Malus baccata,pommetier de Sibérie,Feuillu,94,M,O,,Public,Rue Pierre-Maufay,46.78885784667113,-71.26225665341293
207634,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,70,DHP,N,,Privés,Chemin Sainte-Foy,46.79699448451422,-71.24920498545728
207796,tronçon,Ulmus americana,orme d'Amérique,Feuillu,100,DHP,N,,Privés,Avenue de l'Assomption,46.78084211736899,-71.24693099994055
207996,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,100,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77930945524063,-71.24699970629591
207998,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,130,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779523279193796,-71.2469589498076
208017,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,103,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77883980063966,-71.24691753097552
208018,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,82,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77885584733901,-71.24716744772424
208033,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,109,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778674387699326,-71.24586564344456
208042,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,115,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778497510420884,-71.24497027965124
208057,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,123,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.777765334236086,-71.24495634421395
208124,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,140,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77705146498936,-71.2459852897972
208126,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,136,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77742494185498,-71.24601185868785
208129,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,123,M,O,,Privés,Ilot Cimetière Mount Hermon,46.77763866859993,-71.24644405026146
208498,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,110,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.780189999652286,-71.24716675813774
208541,tronçon,Ulmus americana,orme d'Amérique,Feuillu,91,DHP,N,,Privés,Chemin Saint-Louis,46.7729988394958,-71.2516276487118
208550,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,102,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77929169995662,-71.24558779020191
208737,tronçon,Ulmus pumila,orme de Sibérie,Feuillu,81,M,O,,Public,Chemin Saint-Louis,46.77725439151897,-71.2524889623715
208738,tronçon,Ulmus americana,orme d'Amérique,Feuillu,98,DHP,N,,Privés,Chemin Saint-Louis,46.777442422678604,-71.25236366689273
208749,tronçon,Ulmus x,orme hybride,Feuillu,79,DHP,N,,Privés,Chemin Saint-Louis,46.769704894547225,-71.2651672207883
209043,tronçon,Quercus rubra,chêne rouge,Feuillu,116,DHP,N,,Public,Avenue du Ravin,46.792140378819674,-71.23835441423549
209223,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,47,M,O,,Privés,Côte de Sillery,46.77384787892257,-71.24369052127852
209629,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,108,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.79443106210107,-71.24171142888214
209633,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,113,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.793980202041105,-71.24162176524149
209634,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,120,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.79390254035876,-71.24144333374754
209635,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,86,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.79430311421233,-71.24072108532047
209639,Lieu public,Ulmus americana,orme d'Amérique,Feuillu,101,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.79469702107375,-71.23992308523418
209650,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,40,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.794272291636524,-71.24050154883926
209652,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,74,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.79427244174788,-71.2402015878998
210514,tronçon,Picea omorika,épinette de Serbie,Conifère,33,DHP,N,,Public,Rue des Hospitalières,46.767447724034675,-71.26915701284672
210520,tronçon,Acer saccharinum,érable argenté,Feuillu,56,DHP,N,,Public:Arbre mitoyen,Rue des Hospitalières,46.767581134916334,-71.26831562284336
210711,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,145,DHP,N,,Public,Avenue De Montigny,46.788886599684034,-71.24741185591004
215739,tronçon,Ulmus pumila,orme de Sibérie,Feuillu,95,M,O,,Privés,Boulevard Mathieu,46.866795150157806,-71.26245707921797
218173,tronçon,Ulmus americana,orme d'Amérique,Feuillu,105,DHP,N,,Privés,Le Trait-Carré Ouest,46.85895290651114,-71.27180767050568
218884,tronçon,Ulmus americana,orme d'Amérique,Feuillu,82,M,O,,Privés,Chemin Saint-Louis,46.759019337817115,-71.28479823813942
219959,tronçon,Ulmus americana,orme d'Amérique,Feuillu,103,DHP,N,,Privés,Avenue Belvédère,46.795276192824254,-71.23782455017424
222027,tronçon,Populus x canescens,peuplier grisard,Feuillu,126,M,O,,Public,Rue du Finistère,46.77958782339313,-71.31903665283406
222028,tronçon,Populus x canescens,peuplier grisard,Feuillu,111,DHP,N,,Public,Rue du Finistère,46.77963706503713,-71.31881230797656
232699,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,120,M,O,,Privés,Grande Allée Ouest,46.801621115483044,-71.22494548941867
235484,tronçon,Ulmus pumila,orme de Sibérie,Feuillu,90,DHP,N,,Privés,Boulevard Père-Lelièvre,46.81185432781982,-71.31586155370577
240578,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,78,DHP,N,,Privés,Ilot Fabrique St-Dominique,46.80074075533295,-71.22400704618097
240587,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,66,DHP,N,,Privés,Ilot Fabrique St-Dominique,46.801126602888026,-71.2241919033323
240902,tronçon,Juglans nigra,noyer noir,Feuillu,63,DHP,,,Public,Chemin Sainte-Foy,46.7900390527317,-71.26735223622983
248818,Lieu public,Quercus rubra,chêne rouge,Feuillu,100,DHP,N,,Public,Parc Sainte-Isabelle,46.757136715812806,-71.28565137660955
248843,Lieu public,Ostrya virginiana,ostryer de Virginie,Feuillu,32,DHP,N,,Public,Parc Sainte-Isabelle,46.75709133317118,-71.28600705039034
248996,Lieu public,Ostrya virginiana,ostryer de Virginie,Feuillu,38,DHP,N,,Public,Parc Sainte-Isabelle,46.75716299034239,-71.2860358571524
267493,Lieu public,Acer saccharum,érable à sucre,Feuillu,103,DHP,N,,Public,Centre d'art Maison Hamel-Bruneau,46.76722333782801,-71.27298988956254
267496,Lieu public,Acer saccharum,érable à sucre,Feuillu,96,DHP,N,,Public,Centre d'art Maison Hamel-Bruneau,46.76710986555302,-71.2728739529095
275217,tronçon,Ulmus americana,orme d'Amérique,Feuillu,80,DHP,N,,Privés,Avenue Belvédère,46.79543394183081,-71.23795345881405
283146,tronçon,Pseudotsuga menziesii glauca,sapin bleu de Douglas,Conifère,23,DHP,N,,Public:Arbre mitoyen,Avenue Madeleine-De Verchères,46.78688233012582,-71.25715881344017
283148,tronçon,Pseudotsuga menziesii glauca,sapin bleu de Douglas,Conifère,38,DHP,N,,Public:Arbre mitoyen,Avenue Madeleine-De Verchères,46.78683605315224,-71.2572321266214
294230,tronçon,Quercus rubra,chêne rouge,Feuillu,69,M,O,,Privés,Rue du Manoir-Atkinson,46.74826176502558,-71.33673899660681
294234,tronçon,Quercus rubra,chêne rouge,Feuillu,67,M,O,,Privés,Rue du Manoir-Atkinson,46.74839601132772,-71.33619495211818
294235,tronçon,Pinus strobus,pin blanc,Conifère,68,DHP,N,,Privés,Rue du Manoir-Atkinson,46.74836497269456,-71.33663692151237
294236,tronçon,Quercus rubra,chêne rouge,Feuillu,66,DHP,N,,Privés,Rue du Manoir-Atkinson,46.748608380650424,-71.33636271774546
294237,tronçon,Pinus resinosa,pin rouge,Conifère,44,DHP,N,,Privés,Chemin Saint-Louis,46.74872173019012,-71.3351132753364
294238,tronçon,Pinus resinosa,pin rouge,Conifère,44,DHP,N,,Privés,Chemin Saint-Louis,46.748711372486426,-71.33503351190556
294239,tronçon,Pinus resinosa,pin rouge,Conifère,47,DHP,N,,Privés,Chemin Saint-Louis,46.74872773257943,-71.33495769496245
294240,tronçon,Quercus rubra,chêne rouge,Feuillu,87,M,O,,Privés,Chemin Saint-Louis,46.74898705242344,-71.33472280953404
294241,tronçon,Quercus rubra,chêne rouge,Feuillu,90,DHP,N,,Privés,Chemin Saint-Louis,46.74854357200038,-71.33460646594006
294242,tronçon,Quercus rubra,chêne rouge,Feuillu,103,DHS,N,,Privés,Chemin Saint-Louis,46.748601687084715,-71.33435265082768
294243,tronçon,Quercus rubra,chêne rouge,Feuillu,77,DHS,N,,Privés,Chemin Saint-Louis,46.74845762623288,-71.33442169357195
294244,tronçon,Quercus rubra,chêne rouge,Feuillu,80,DHP,N,,Privés,Chemin Saint-Louis,46.748314369820385,-71.33424590608684
294245,tronçon,Quercus rubra,chêne rouge,Feuillu,100,DHP,N,,Privés,Rue du Manoir-Atkinson,46.74801377723025,-71.33591405766747
294248,tronçon,Fraxinus americana,frêne blanc,Feuillu,86,DHP,N,,Privés,Chemin Saint-Louis,46.748847564537336,-71.33421037858952
294249,tronçon,Quercus rubra,chêne rouge,Feuillu,86,DHP,N,,Privés,Chemin Saint-Louis,46.748958915685215,-71.33359785677222
294250,tronçon,Pinus resinosa,pin rouge,Conifère,47,DHP,N,,Privés,Chemin Saint-Louis,46.748942146172745,-71.33350398982412
294251,tronçon,Quercus rubra,chêne rouge,Feuillu,80,DHP,N,,Privés,Chemin Saint-Louis,46.74889453120955,-71.33379124009983
294252,tronçon,Quercus rubra,chêne rouge,Feuillu,89,M,O,,Privés,Chemin Saint-Louis,46.74863449220947,-71.33362256546326
294253,tronçon,Abies balsamea,sapin baumier,Conifère,51,M,N,,Privés,Chemin Saint-Louis,46.74853645799489,-71.3332988194184
294254,tronçon,Quercus rubra,chêne rouge,Feuillu,117,M,N,,Privés,Chemin Saint-Louis,46.748560014465994,-71.33291400600712
294255,tronçon,Quercus rubra,chêne rouge,Feuillu,74,M,N,,Privés,Chemin Saint-Louis,46.748713973814816,-71.33338700926652
294256,tronçon,Betula papyrifera,bouleau à papier,Feuillu,63,M,N,,Privés,Chemin Saint-Louis,46.74871408179325,-71.33320662705142
294257,tronçon,Quercus rubra,chêne rouge,Feuillu,81,DHP,N,,Privés,Chemin Saint-Louis,46.748781627172704,-71.33225472892224
294258,tronçon,Quercus rubra,chêne rouge,Feuillu,84,M,O,,Privés,Chemin Saint-Louis,46.74902968128469,-71.3328517023927
294260,tronçon,Acer saccharum,érable à sucre,Feuillu,86,DHP,N,,Privés,Chemin Saint-Louis,46.74888823835989,-71.3327824324193
294261,tronçon,Quercus rubra,chêne rouge,Feuillu,63,M,O,,Privés,Chemin Saint-Louis,46.7489058650179,-71.33288098481626
294262,tronçon,Quercus rubra,chêne rouge,Feuillu,64,DHP,N,,Privés,Chemin Saint-Louis,46.749319585122635,-71.33169509915241
294263,tronçon,Quercus rubra,chêne rouge,Feuillu,76,DHP,N,,Privés,Chemin Saint-Louis,46.74922788348548,-71.33169016772214
294264,tronçon,Quercus rubra,chêne rouge,Feuillu,56,DHP,N,,Privés,Chemin Saint-Louis,46.74937234152085,-71.33164299378319
294265,tronçon,Juglans cinerea,noyer cendré,Feuillu,43,DHP,N,,Privés,Rue Gaudias-Petitclerc,46.75045138268688,-71.33823131551333
294270,tronçon,Quercus rubra,chêne rouge,Feuillu,76,DHP,N,,Privés,Chemin Saint-Louis,46.74827711404224,-71.33430036739178
294271,tronçon,Pinus resinosa,pin rouge,Conifère,50,DHP,N,,Privés,Terrasse de la Veuve-Pin,46.750341733093585,-71.32826660730994
294272,tronçon,Pinus resinosa,pin rouge,Conifère,58,DHP,N,,Privés,Chemin Saint-Louis,46.75066793847627,-71.32802656863912
294273,tronçon,Pinus resinosa,pin rouge,Conifère,43,DHP,N,,Privés,Chemin Saint-Louis,46.7504953653674,-71.32797710694766
294274,tronçon,Quercus rubra,chêne rouge,Feuillu,90,M,O,,Privés,Chemin Saint-Louis,46.75138371502362,-71.32803458642628
294275,tronçon,Pinus strobus,pin blanc,Conifère,85,DHP,N,,Privés,Terrasse de la Veuve-Pin,46.75033756578704,-71.32818980407029
294315,tronçon,Pinus strobus,pin blanc,Conifère,68,DHP,N,,Privés,Chemin Saint-Louis,46.75067425162307,-71.32789758317999
294316,tronçon,Quercus rubra,chêne rouge,Feuillu,81,M,O,,Privés,Chemin Saint-Louis,46.75281115219309,-71.31691202741126
294317,tronçon,Tsuga canadensis,pruche de L'est,Conifère,57,DHP,N,,Privés,Chemin Saint-Louis,46.75087658751133,-71.32754250415496
294349,tronçon,Quercus rubra,chêne rouge,Feuillu,86,DHP,N,,Privés,Chemin Saint-Louis,46.75623630534724,-71.29933179684127
294350,tronçon,Quercus rubra,chêne rouge,Feuillu,90,DHP,N,,Privés,Chemin Saint-Louis,46.75958346456201,-71.28635234458974
294351,tronçon,Sorbus intermedia,sorbier de Suède,Feuillu,59,DHP,N,,Privés,Rue William-Stuart,46.758560214435896,-71.28722743157542
294352,tronçon,Fraxinus americana,frêne blanc,Feuillu,68,DHP,N,,Privés,Chemin Saint-Louis,46.75699376402254,-71.29095867176795
294374,tronçon,Juglans cinerea,noyer cendré,Feuillu,43,DHS,N,,Privés,Chemin Saint-Louis,46.76720650020919,-71.27076847543466
294375,tronçon,Acer saccharum,érable à sucre,Feuillu,86,DHP,N,,Privés,Chemin Saint-Louis,46.76855138372873,-71.26855328653564
294376,tronçon,Acer saccharum,érable à sucre,Feuillu,94,DHP,N,,Privés,Chemin Saint-Louis,46.76860479951361,-71.26833702700047
294377,tronçon,Acer saccharum,érable à sucre,Feuillu,106,DHP,N,,Privés,Chemin Saint-Louis,46.76868651667806,-71.26839298406902
294378,tronçon,Pinus banksiana,pin gris,Conifère,48,DHP,N,,Privés,Rue des Hospitalières,46.76654516686441,-71.27047752316732
294379,tronçon,Juglans cinerea,noyer cendré,Feuillu,65,DHP,N,,Privés,Rue des Hospitalières,46.76711094824132,-71.27055210226354
294380,tronçon,Acer saccharinum,érable argenté,Feuillu,120,DHS,N,,Privés,Rue des Hospitalières,46.76729418332364,-71.26825797968661
294381,tronçon,Pinus sylvestris,pin sylvestre,Conifère,52,DHP,N,,Privés,Rue des Hospitalières,46.767819011354405,-71.26698507920244
294382,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,61,DHP,N,,Privés,Rue des Hospitalières,46.767634135592786,-71.26774553749401
294383,tronçon,Fraxinus americana,frêne blanc,Feuillu,141,DHP,N,,Privés,Rue de la Visitation,46.764968231271496,-71.27810665895893
294384,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,73,DHP,N,,Privés,Chemin Saint-Louis,46.766545278439146,-71.27319018292268
294385,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,49,DHP,N,,Privés,Rue Corrigan,46.76652723078564,-71.2733247660884
294386,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,57,DHP,N,,Privés,Rue Corrigan,46.76647858715972,-71.27346981739282
294387,tronçon,Fraxinus americana,frêne blanc,Feuillu,68,DHP,N,,Privés,Chemin Saint-Louis,46.76416918881562,-71.27831989243303
294394,tronçon,Quercus rubra,chêne rouge,Feuillu,68,DHP,N,,Privés,Chemin Saint-Louis,46.770248174452284,-71.26242938965551
294395,tronçon,Quercus rubra,chêne rouge,Feuillu,95,DHP,N,,Privés,Chemin Saint-Louis,46.77037721995276,-71.26216871021464
294396,tronçon,Quercus rubra,chêne rouge,Feuillu,79,DHP,N,,Privés,Chemin Saint-Louis,46.77029868654663,-71.26233127211698
294397,tronçon,Quercus rubra,chêne rouge,Feuillu,140,DHP,N,,Privés,Chemin Saint-Louis,46.77075312151124,-71.26147918327179
294398,tronçon,Quercus rubra,chêne rouge,Feuillu,91,DHP,N,,Privés,Chemin Saint-Louis,46.77081557609191,-71.26134110002371
294399,tronçon,Quercus rubra,chêne rouge,Feuillu,141,DHP,N,,Privés,Chemin Saint-Louis,46.77092193522594,-71.2611418588177
294400,tronçon,Quercus rubra,chêne rouge,Feuillu,89,DHP,N,,Privés,Chemin Saint-Louis,46.77185384193807,-71.25904260527
294442,tronçon,Quercus rubra,chêne rouge,Feuillu,95,DHP,N,,Privés,Chemin Saint-Louis,46.77783994731657,-71.25244197529322
294443,tronçon,Quercus rubra,chêne rouge,Feuillu,116,DHP,N,,Privés,Chemin Saint-Louis,46.77899369796498,-71.25299875626943
294444,tronçon,Quercus rubra,chêne rouge,Feuillu,85,DHP,N,,Privés,Chemin Saint-Louis,46.777286296003254,-71.25146983495415
294445,tronçon,Quercus rubra,chêne rouge,Feuillu,115,DHP,N,,Privés,Chemin Saint-Louis,46.7779814617884,-71.2502617744549
294446,tronçon,Quercus rubra,chêne rouge,Feuillu,93,DHP,N,,Privés,Chemin Saint-Louis,46.777868535775184,-71.25020862302748
294447,tronçon,Quercus rubra,chêne rouge,Feuillu,84,DHP,N,,Privés,Chemin Saint-Louis,46.77765130919503,-71.2501396969397
294448,tronçon,Quercus rubra,chêne rouge,Feuillu,97,DHP,N,,Privés,Chemin Saint-Louis,46.777612368784766,-71.25009359740137
294449,tronçon,Quercus rubra,chêne rouge,Feuillu,91,DHP,N,,Privés,Chemin Saint-Louis,46.777526280376115,-71.24980685815962
294450,tronçon,Quercus rubra,chêne rouge,Feuillu,75,DHP,N,,Privés,Chemin Saint-Louis,46.77710153048866,-71.24915156951795
294451,tronçon,Quercus rubra,chêne rouge,Feuillu,98,DHP,N,,Privés,Chemin Saint-Louis,46.77698472365179,-71.24901362843538
294452,tronçon,Quercus rubra,chêne rouge,Feuillu,78,DHP,N,,Privés,Chemin Saint-Louis,46.776842283612076,-71.24882926377342
294453,tronçon,Quercus rubra,chêne rouge,Feuillu,98,DHP,N,,Privés,Chemin Saint-Louis,46.776282320623054,-71.24804317159803
294454,tronçon,Quercus rubra,chêne rouge,Feuillu,88,DHP,N,,Privés,Chemin Saint-Louis,46.776267725958846,-71.24795269236807
294455,tronçon,Quercus rubra,chêne rouge,Feuillu,97,DHP,N,,Privés,Chemin Saint-Louis,46.777556370982225,-71.25226115923437
294548,tronçon,Acer saccharum,érable à sucre,Feuillu,102,DHP,N,,Privés,Chemin Saint-Louis,46.769261479696944,-71.26143309944506
294549,tronçon,Quercus rubra,chêne rouge,Feuillu,92,DHP,N,,Privés,Chemin Saint-Louis,46.76967385289319,-71.26084577865274
294550,tronçon,Quercus rubra,chêne rouge,Feuillu,93,DHP,N,,Privés,Chemin Saint-Louis,46.76970866503294,-71.26070296119568
294551,tronçon,Larix decidua,mélèze d'Europe,Conifère,73,DHP,N,,Privés,Chemin Saint-Louis,46.76973178290134,-71.26057618861905
294552,tronçon,Ostrya virginiana,ostryer de Virginie,Feuillu,35,M,O,,Privés,Chemin Saint-Louis,46.769296880807616,-71.260257174896
294553,tronçon,Fraxinus americana,frêne blanc,Feuillu,74,DHP,N,,Privés,Chemin Saint-Louis,46.76951372410167,-71.26013103366509
294554,tronçon,Populus balsamifera,peuplier baumier,Feuillu,75,DHP,N,,Privés,Chemin Saint-Louis,46.769322012275914,-71.25955741425635
294555,tronçon,Populus balsamifera,peuplier baumier,Feuillu,57,DHP,N,,Privés,Chemin Saint-Louis,46.7692759966906,-71.25968732099227
294556,tronçon,Quercus rubra,chêne rouge,Feuillu,82,DHP,N,,Privés,Chemin Saint-Louis,46.76908595761504,-71.26051320530148
294557,tronçon,Ostrya virginiana,ostryer de Virginie,Feuillu,29,DHP,N,,Privés,Chemin Saint-Louis,46.77072981235771,-71.26064574273013
294558,tronçon,Gymnocladus dioicus,chicot du Canada,Feuillu,129,DHP,N,,Privés,Chemin Saint-Louis,46.769312648392024,-71.26026307927613
294559,tronçon,Aesculus,marronnier,Feuillu,48,DHP,N,,Privés,Chemin Saint-Louis,46.77184841922814,-71.25835154784973
294560,tronçon,Acer platanoides,érable de Norvège,Feuillu,65,DHP,N,,Privés,Chemin Saint-Louis,46.77110541375126,-71.25791090919432
294561,tronçon,Acer platanoides,érable de Norvège,Feuillu,72,DHP,N,,Privés,Chemin Saint-Louis,46.771053382608535,-71.2579387629555
294562,tronçon,Quercus rubra,chêne rouge,Feuillu,108,DHP,N,,Privés,Chemin Saint-Louis,46.77103888255897,-71.25892125940575
294563,tronçon,Robinia pseudoacacia,robinier faux-acacia,Feuillu,0,DHP,N,,Privés,Chemin Saint-Louis,46.770910242799374,-71.25552330547237
294564,tronçon,Quercus rubra,chêne rouge,Feuillu,87,DHP,N,,Privés,Chemin Saint-Louis,46.77089789986688,-71.25655143559032
294565,tronçon,Quercus rubra,chêne rouge,Feuillu,126,M,O,,Privés,Chemin Saint-Louis,46.77162005359115,-71.25731482747757
294566,tronçon,Fraxinus americana,frêne blanc,Feuillu,63,DHP,N,,Privés,Chemin Saint-Louis,46.77235804178065,-71.25717091135778
294567,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,70,DHP,N,,Privés,Chemin Saint-Louis,46.77252492647957,-71.25705393672408
294568,tronçon,Pinus strobus,pin blanc,Conifère,77,DHP,N,,Privés,Chemin Saint-Louis,46.773013916657824,-71.2564422959665
294569,tronçon,Pinus resinosa,pin rouge,Conifère,55,DHP,N,,Privés,Chemin Saint-Louis,46.77325280592949,-71.25609286754901
294570,tronçon,Quercus rubra,chêne rouge,Feuillu,79,DHP,N,,Privés,Chemin Saint-Louis,46.77604570626175,-71.25358706971565
294571,tronçon,Quercus rubra,chêne rouge,Feuillu,97,DHP,N,,Privés,Chemin Saint-Louis,46.77600346642269,-71.25359685163747
294572,tronçon,Quercus rubra,chêne rouge,Feuillu,79,DHP,N,,Privés,Chemin Saint-Louis,46.77594401122993,-71.25360467792828
294573,tronçon,Quercus rubra,chêne rouge,Feuillu,74,DHP,N,,Privés,Chemin Saint-Louis,46.775858187078484,-71.25364670692949
294574,tronçon,Quercus rubra,chêne rouge,Feuillu,114,DHP,N,,Privés,Chemin Saint-Louis,46.7719867462042,-71.25254613459917
294575,tronçon,Pinus strobus,pin blanc,Conifère,69,DHP,N,,Privés,Chemin Saint-Louis,46.77208205202638,-71.25239468124954
294576,tronçon,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Chemin Saint-Louis,46.772191764735716,-71.2522549769164
294577,tronçon,Pinus strobus,pin blanc,Conifère,68,DHP,N,,Privés,Chemin Saint-Louis,46.772365886460136,-71.25238984812384
294578,tronçon,Pinus strobus,pin blanc,Conifère,75,DHP,N,,Privés,Chemin Saint-Louis,46.77278687909064,-71.25184185360548
294579,tronçon,Quercus rubra,chêne rouge,Feuillu,96,DHP,N,,Privés,Avenue Pasteur,46.77943878855126,-71.25325991059034
294580,tronçon,Pinus strobus,pin blanc,Conifère,68,DHP,N,,Privés,Avenue Pasteur,46.78010217622238,-71.25364286904252
294581,tronçon,Quercus rubra,chêne rouge,Feuillu,85,DHP,N,,Privés,Rue du Cardinal-Persico,46.77468022491759,-71.24517423695943
294582,tronçon,Ostrya virginiana,ostryer de Virginie,Feuillu,32,DHP,N,,Privés,Côte de Sillery,46.774196044799126,-71.24468900548366
294583,tronçon,Quercus rubra,chêne rouge,Feuillu,86,DHP,N,,Privés,Chemin Saint-Louis,46.77451514886084,-71.25482488164694
294584,tronçon,Quercus rubra,chêne rouge,Feuillu,82,DHP,N,,Privés,Chemin Saint-Louis,46.77438643305983,-71.25498359634314
294585,tronçon,Ulmus americana,orme d'Amérique,Feuillu,97,DHP,N,,Privés,Chemin Saint-Louis,46.77485786453415,-71.2540955038524
294586,tronçon,Quercus rubra,chêne rouge,Feuillu,95,DHP,N,,Privés,Chemin Saint-Louis,46.776510225281896,-71.25500048645631
294587,tronçon,Quercus rubra,chêne rouge,Feuillu,85,DHP,N,,Privés,Chemin Saint-Louis,46.77718540262573,-71.25571446146998
294588,tronçon,Quercus rubra,chêne rouge,Feuillu,78,DHP,N,,Privés,Chemin Saint-Louis,46.77656530213088,-71.2572349268742
294589,tronçon,Quercus rubra,chêne rouge,Feuillu,83,DHP,N,,Privés,Chemin Saint-Louis,46.776398943713225,-71.25677594378632
294590,tronçon,Quercus rubra,chêne rouge,Feuillu,87,DHP,N,,Privés,Chemin Saint-Louis,46.77638169243596,-71.25681208015736
294591,tronçon,Quercus rubra,chêne rouge,Feuillu,101,DHP,N,,Privés,Chemin Saint-Louis,46.76951426938952,-71.26522221059908
294592,tronçon,Quercus rubra,chêne rouge,Feuillu,92,DHP,N,,Privés,Chemin Saint-Louis,46.76959699606486,-71.26507627778393
294593,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,77,DHP,N,,Privés,Chemin Saint-Louis,46.769605641576106,-71.26571927379827
294594,tronçon,Quercus rubra,chêne rouge,Feuillu,100,DHP,N,,Privés,Chemin Saint-Louis,46.76874210105928,-71.26377862895606
294595,tronçon,Pinus strobus,pin blanc,Conifère,99,DHP,N,,Privés,Chemin Saint-Louis,46.76879282440927,-71.26350340642362
294596,tronçon,Quercus rubra,chêne rouge,Feuillu,83,DHP,N,,Privés,Rue Negabamat,46.769419771944925,-71.2644910477711
294597,tronçon,Quercus rubra,chêne rouge,Feuillu,72,DHP,N,,Privés,Chemin Saint-Louis,46.76951157732605,-71.26415214118082
294598,tronçon,Juglans,noyer,Feuillu,117,DHP,N,,Privés,Avenue de Kilmarnock,46.7679838292665,-71.26369020306365
294599,tronçon,Quercus rubra,chêne rouge,Feuillu,93,DHP,N,,Privés,Chemin Saint-Louis,46.77077348617445,-71.26096572599131
294600,tronçon,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Chemin Saint-Louis,46.770586781886294,-71.26105238187661
294601,tronçon,Juglans nigra,noyer noir,Feuillu,77,DHP,N,,Privés,Chemin Saint-Louis,46.771073304909315,-71.25936175907967
294603,tronçon,Quercus rubra,chêne rouge,Feuillu,118,M,O,,Privés,Avenue Pasteur,46.779579238655344,-71.2534666751055
294604,tronçon,Juglans cinerea,noyer cendré,Feuillu,64,M,O,,Privés,Chemin Saint-Louis,46.775071143852344,-71.25287116382954
294605,tronçon,Juglans cinerea,noyer cendré,Feuillu,36,DHP,N,,Privés,Chemin Saint-Louis,46.77522647850162,-71.25298851043146
294606,tronçon,Juglans cinerea,noyer cendré,Feuillu,63,DHP,N,,Privés,Chemin Saint-Louis,46.77523237883491,-71.25305024288875
294607,tronçon,Acer saccharum,érable à sucre,Feuillu,91,DHP,N,,Privés,Chemin Saint-Louis,46.773866201701104,-71.25262912005384
294644,tronçon,Abies fraseri,Sapin de Fraser,Conifère,39,DHS,N,,Privés,Rue des Hospitalières,46.76752736671278,-71.2690999223853
294645,tronçon,Abies alba,Sapin blanc,Conifère,46,DHP,N,,Privés,Rue des Hospitalières,46.76748021941804,-71.26913691956597
294646,Lieu public,Quercus rubra,chêne rouge,Feuillu,82,DHP,N,,Public:Sans entretien,Parc de la Falaise,46.765518065525384,-71.26614921208032
294647,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,61,DHP,N,,Privés,Côte à Gignac,46.765870241401174,-71.26658589166011
294648,tronçon,Juglans cinerea,noyer cendré,Feuillu,49,DHP,N,,Privés,Chemin Saint-Louis,46.76804663560243,-71.26894579805528
294649,tronçon,Picea omorika,épinette de Serbie,Conifère,27,DHP,N,,Privés,Rue des Hospitalières,46.767466225796305,-71.26918437851754
294650,tronçon,Metasequoia glyptostroboides,Métaséquoia de Chine,Conifère,0,DHP,N,,Privés,Rue des Hospitalières,46.76749171175494,-71.26908681949928
294651,tronçon,Gleditsia triacanthos inermis,févier inerme d'Amérique,Feuillu,40,DHS,N,,Privés,Rue des Hospitalières,46.767547269203014,-71.26900587121135
294654,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,80,DHP,N,,Privés,Côte à Gignac,46.76611462191948,-71.26642200940559
294655,tronçon,Acer saccharum,érable à sucre,Feuillu,89,DHP,N,,Privés,Côte à Gignac,46.76601368631324,-71.26654485219966
294656,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,70,DHP,N,,Privés,Côte à Gignac,46.7661735854018,-71.26680334239462
294692,tronçon,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Chemin Saint-Louis,46.7586026573025,-71.2863497780392
294693,tronçon,Acer saccharum,érable à sucre,Feuillu,100,DHP,N,,Privés,Chemin Saint-Louis,46.75843093741708,-71.2861696256963
294694,tronçon,Quercus rubra,chêne rouge,Feuillu,83,DHP,N,,Privés,Chemin Saint-Louis,46.7601163437233,-71.2858194606603
294695,tronçon,Quercus rubra,chêne rouge,Feuillu,93,DHP,N,,Public:Arbre mitoyen,Rue de Chambly,46.76021402765629,-71.285980592908
294696,tronçon,Quercus rubra,chêne rouge,Feuillu,98,DHP,N,,Privés,Rue de Rouville,46.76053047858975,-71.28525336963807
294800,Lieu public,Pinus strobus,pin blanc,Conifère,89,DHP,N,,Public,Parc Cartier-Roberval,46.748258611336034,-71.34067749263598
294801,Lieu public,Tsuga canadensis,pruche de L'est,Conifère,70,DHP,N,,Public,Parc Cartier-Roberval,46.748954314314545,-71.34096738134642
294802,Lieu public,Tsuga canadensis,pruche de L'est,Conifère,58,DHP,N,,Public,Parc Cartier-Roberval,46.74939258974819,-71.34047741005993
294808,Lieu public,Pinus strobus,pin blanc,Conifère,77,DHP,N,,Public,Parc Cartier-Roberval,46.74805035682611,-71.34057013793401
294840,tronçon,Pinus resinosa,pin rouge,Conifère,42,DHP,N,,Privés,Rue de Toulouse,46.75029449124003,-71.32736884615865
294841,tronçon,Pinus resinosa,pin rouge,Conifère,44,DHP,N,,Privés,Rue de Toulouse,46.75020939657227,-71.3272240260261
294842,tronçon,Pinus strobus,pin blanc,Conifère,60,DHP,N,,Privés,Rue de Toulouse,46.75029392677824,-71.32715198313193
294843,tronçon,Pinus resinosa,pin rouge,Conifère,75,M,O,,Privés,Rue de Toulouse,46.750255883867815,-71.32673818959866
294844,tronçon,Pinus resinosa,pin rouge,Conifère,63,M,O,,Privés,Rue de Toulouse,46.75041576355373,-71.32690467608558
294845,tronçon,Pinus strobus,pin blanc,Conifère,68,DHP,N,,Privés,Rue de l'Espéranto,46.7524696537834,-71.31665235917163
294846,tronçon,Pinus resinosa,pin rouge,Conifère,49,DHP,N,,Privés,Rue de l'Espéranto,46.75273413848911,-71.31619259933845
294848,tronçon,Fraxinus americana,frêne blanc,Feuillu,78,DHP,N,,Privés,Chemin Saint-Louis,46.75472127530118,-71.30726271380551
294849,tronçon,Fraxinus americana,frêne blanc,Feuillu,64,DHS,N,,Privés,Chemin Saint-Louis,46.754745188982284,-71.3070967647281
294850,tronçon,Fraxinus americana,frêne blanc,Feuillu,67,DHP,N,,Privés,Chemin Saint-Louis,46.754821026356225,-71.3073994738787
294851,tronçon,Fraxinus americana,frêne blanc,Feuillu,91,M,O,,Privés,Chemin Saint-Louis,46.754882089187944,-71.30641907871272
294852,tronçon,Picea pungens,épinette du Colorado,Conifère,85,DHS,N,,Privés,Chemin Saint-Louis,46.75498249747194,-71.30574112022609
294870,tronçon,Juglans cinerea,noyer cendré,Feuillu,69,DHP,N,,Privés,Chemin Saint-Louis,46.77999508371011,-71.24862444126184
294871,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,0,DHP,N,,Privés,Avenue des Grands-Pins,46.780094966052815,-71.24854135683378
294872,tronçon,Quercus rubra,chêne rouge,Feuillu,139,M,O,,Privés,Avenue des Grands-Pins,46.78340012209852,-71.25223879371117
294873,Lieu public,Pinus strobus,pin blanc,Conifère,80,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.776954950920704,-71.2461467563064
294874,Lieu public,Quercus rubra,chêne rouge,Feuillu,109,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77642634563346,-71.24577411517747
294875,Lieu public,Quercus rubra,chêne rouge,Feuillu,115,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77706787039963,-71.24487267144048
294876,Lieu public,Pinus strobus,pin blanc,Conifère,77,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.777044374734245,-71.24566932219852
294877,Lieu public,Quercus rubra,chêne rouge,Feuillu,131,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77722121850763,-71.24535024876214
294878,Lieu public,Acer saccharum,érable à sucre,Feuillu,122,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77761709676395,-71.24551492489995
294879,Lieu public,Gleditsia triacanthos inermis,févier inerme d'Amérique,Feuillu,55,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.777814876491675,-71.24620627643674
294880,Lieu public,Acer saccharum,érable à sucre,Feuillu,100,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77782467071316,-71.2459155366315
294881,Lieu public,Quercus rubra,chêne rouge,Feuillu,104,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.777780682814274,-71.24698377517916
294882,Lieu public,Quercus rubra,chêne rouge,Feuillu,93,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778136627195764,-71.24708447814679
294883,Lieu public,Quercus rubra,chêne rouge,Feuillu,104,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77818858346971,-71.24713658350247
294884,Lieu public,Quercus rubra,chêne rouge,Feuillu,93,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77828525956492,-71.2472454218841
294885,Lieu public,Acer saccharum,érable à sucre,Feuillu,107,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778396746326266,-71.24627575952925
294886,Lieu public,Pinus strobus,pin blanc,Conifère,77,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77826514330354,-71.24671065029871
294887,Lieu public,Pinus strobus,pin blanc,Conifère,91,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77932525442896,-71.24836552532757
294888,Lieu public,Acer saccharum,érable à sucre,Feuillu,107,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77921393840886,-71.24812515590612
294889,Lieu public,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779331764036534,-71.24618505200381
294890,Lieu public,Pinus strobus,pin blanc,Conifère,75,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.7792199834243,-71.24616843449294
294891,Lieu public,Pinus strobus,pin blanc,Conifère,82,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779119254368055,-71.24636368820265
294892,Lieu public,Ostrya virginiana,ostryer de Virginie,Feuillu,57,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779767113669536,-71.24754262649134
294893,Lieu public,Acer saccharum,érable à sucre,Feuillu,114,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77986868601394,-71.24738799470464
294894,Lieu public,Pinus strobus,pin blanc,Conifère,89,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77989653590237,-71.24777685707274
294895,Lieu public,Pinus strobus,pin blanc,Conifère,82,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779968241531954,-71.24779554245755
294896,Lieu public,Pinus strobus,pin blanc,Conifère,78,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77978857082555,-71.24784272747281
294897,Lieu public,Pinus strobus,pin blanc,Conifère,75,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77974599404078,-71.24776371986223
294898,Lieu public,Quercus rubra,chêne rouge,Feuillu,97,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.78010873379612,-71.2480180105236
294899,Lieu public,Quercus rubra,chêne rouge,Feuillu,116,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.78026452703041,-71.24733061168307
294900,Lieu public,Quercus rubra,chêne rouge,Feuillu,109,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.78036378730382,-71.247608494544
294901,Lieu public,Quercus rubra,chêne rouge,Feuillu,98,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.780520165963246,-71.24752138339079
294902,Lieu public,Pinus strobus,pin blanc,Conifère,80,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77845242121217,-71.24685976557434
294903,Lieu public,Pinus strobus,pin blanc,Conifère,83,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778565388217615,-71.24687654471732
294904,Lieu public,Ostrya virginiana,ostryer de Virginie,Feuillu,60,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778614389849594,-71.247225552065
294905,Lieu public,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77859040125482,-71.2471490038612
294906,Lieu public,Quercus rubra,chêne rouge,Feuillu,107,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77839964981589,-71.2448827612181
294907,Lieu public,Quercus rubra,chêne rouge,Feuillu,82,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77828480164006,-71.2447527234375
294908,Lieu public,Quercus rubra,chêne rouge,Feuillu,86,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77822907494917,-71.24458997678478
294909,Lieu public,Ostrya virginiana,ostryer de Virginie,Feuillu,33,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77822824346203,-71.24470532359642
294910,Lieu public,Ostrya virginiana,ostryer de Virginie,Feuillu,39,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778225572777075,-71.24471480720315
294911,Lieu public,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,58,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778323439947805,-71.24524356574929
294912,Lieu public,Pinus strobus,pin blanc,Conifère,87,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77836547103457,-71.24551435895182
294913,Lieu public,Quercus rubra,chêne rouge,Feuillu,89,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77847642258688,-71.2455629689339
294914,Lieu public,Pinus strobus,pin blanc,Conifère,73,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77854266051993,-71.24470397522873
294915,Lieu public,Quercus rubra,chêne rouge,Feuillu,99,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77886406437545,-71.24859456888383
294916,Lieu public,Quercus rubra,chêne rouge,Feuillu,107,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.778912949680475,-71.24813252408858
294917,Lieu public,Quercus rubra,chêne rouge,Feuillu,91,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77892849242812,-71.24891291404718
294918,Lieu public,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77919702532293,-71.2487496668769
294919,Lieu public,Quercus rubra,chêne rouge,Feuillu,98,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779152348222304,-71.24855723441252
294920,tronçon,Fraxinus americana,frêne blanc,Feuillu,79,DHP,N,,Privés,Chemin Saint-Louis,46.779691556847716,-71.24910768808155
294994,tronçon,Pinus strobus,pin blanc,Conifère,79,DHP,N,,Privés,Avenue de l'Assomption,46.77978695588226,-71.24385811342155
294995,Lieu public,Pinus strobus,pin blanc,Conifère,80,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779674378223945,-71.24821306853161
294996,Lieu public,Populus tremula 'Erecta',tremble d'Europe 'Erecta',Feuillu,33,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77931419911013,-71.24860054590555
294997,Lieu public,Pinus strobus,pin blanc,Conifère,86,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77940830256355,-71.24873386885676
294998,Lieu public,Pinus strobus,pin blanc,Conifère,72,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.77934895094141,-71.24874654781968
294999,Lieu public,Pinus strobus,pin blanc,Conifère,86,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779515901659266,-71.2479948445584
295000,Lieu public,Essence à déterminer,Essence à déterminer,Feuillu,72,M,O,,Privés,Ilot Cimetière Mount Hermon,46.779642023391034,-71.24711056566353
295001,tronçon,Juglans cinerea,noyer cendré,Feuillu,47,DHS,N,,Privés,Avenue de l'Assomption,46.77906285728206,-71.2449951018443
295002,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,54,DHP,N,,Privés,Avenue de l'Assomption,46.779592582129105,-71.2446875586666
295003,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,51,DHP,N,,Privés,Avenue de l'Assomption,46.77955964971716,-71.24464828857123
295004,tronçon,Juglans cinerea,noyer cendré,Feuillu,58,DHS,N,,Privés,Avenue de l'Assomption,46.77937229039442,-71.24503933834258
295005,tronçon,Juglans cinerea,noyer cendré,Feuillu,55,DHS,N,,Privés,Avenue de l'Assomption,46.779305804572154,-71.2449553416915
295006,tronçon,Juglans cinerea,noyer cendré,Feuillu,51,DHS,N,,Privés,Avenue de l'Assomption,46.779223535464254,-71.24483455116723
295007,tronçon,Juglans cinerea,noyer cendré,Feuillu,43,DHS,N,,Privés,Avenue de l'Assomption,46.77917658601607,-71.24476634283032
295008,tronçon,Juglans cinerea,noyer cendré,Feuillu,0,DHS,N,,Privés,Avenue de l'Assomption,46.77890774510085,-71.24364568016772
295009,tronçon,Quercus rubra,chêne rouge,Feuillu,101,DHP,N,,Privés,Avenue de l'Assomption,46.779679570180306,-71.24320512882139
295010,tronçon,Quercus rubra,chêne rouge,Feuillu,87,DHP,N,,Privés,Avenue de l'Assomption,46.779688249999545,-71.24315691145841
295011,tronçon,Ostrya virginiana,ostryer de Virginie,Feuillu,28,DHP,N,,Privés,Chemin Saint-Louis,46.78513573483514,-71.24029084170897
295012,tronçon,Quercus macrocarpa,chêne à gros fruits,Feuillu,85,DHP,N,,Privés,Chemin Saint-Louis,46.78519320092551,-71.24064174361199
295013,tronçon,Fraxinus americana,frêne blanc,Feuillu,71,DHP,N,,Privés,Chemin Saint-Louis,46.78524196429427,-71.24104715527261
295014,tronçon,Fraxinus americana,frêne blanc,Feuillu,79,DHP,N,,Privés,Chemin Saint-Louis,46.78532383302331,-71.24172748761647
295015,tronçon,Quercus rubra,chêne rouge,Feuillu,93,DHP,N,,Privés,Chemin Saint-Louis,46.78531495951652,-71.2462353765488
295016,tronçon,Pinus strobus,pin blanc,Conifère,80,DHP,N,,Privés,Chemin Saint-Louis,46.78562755113274,-71.24569693136195
295017,tronçon,Pinus strobus,pin blanc,Conifère,79,DHP,N,,Privés,Chemin Saint-Louis,46.78548563312566,-71.24223552633403
295018,tronçon,Pinus strobus,pin blanc,Conifère,78,DHP,N,,Privés,Chemin Saint-Louis,46.785581880120695,-71.24236267490795
295019,tronçon,Pinus strobus,pin blanc,Conifère,73,DHP,N,,Privés,Chemin Saint-Louis,46.78564254126237,-71.24242399219727
295020,tronçon,Pinus strobus,pin blanc,Conifère,75,DHP,N,,Privés,Chemin Saint-Louis,46.785690967209,-71.24249362844705
295021,tronçon,Acer saccharum,érable à sucre,Feuillu,96,DHP,N,,Privés,Chemin Saint-Louis,46.785720555075336,-71.24307326419651
295022,tronçon,Quercus rubra,chêne rouge,Feuillu,85,DHP,N,,Privés,Chemin Saint-Louis,46.78560729477244,-71.24483291145734
295023,tronçon,Fraxinus americana,frêne blanc,Feuillu,70,DHP,N,,Privés,Chemin Saint-Louis,46.78566841905725,-71.24507579280026
295024,tronçon,Quercus macrocarpa,chêne à gros fruits,Feuillu,82,DHP,N,,Privés,Chemin Saint-Louis,46.785717869204234,-71.24540926487876
295025,tronçon,Fraxinus americana,frêne blanc,Feuillu,68,DHP,N,,Privés,Chemin Saint-Louis,46.785865357322926,-71.24571164938364
295026,tronçon,Quercus rubra,chêne rouge,Feuillu,95,DHP,N,,Privés,Chemin Saint-Louis,46.785891775276696,-71.24658445559703
295027,tronçon,Quercus rubra,chêne rouge,Feuillu,84,DHP,N,,Privés,Chemin Saint-Louis,46.78596110774904,-71.24636011311519
295028,tronçon,Pinus strobus,pin blanc,Conifère,73,DHP,N,,Privés,Avenue de l'Assomption,46.77984230349098,-71.24369593661093
295029,tronçon,Picea glauca,épinette blanche,Conifère,76,DHP,N,,Privés,Avenue de l'Assomption,46.77984739668984,-71.2442258011414
295030,tronçon,Quercus rubra,chêne rouge,Feuillu,98,DHP,N,,Privés,Avenue de l'Assomption,46.77988221157629,-71.2431392161966
295031,tronçon,Pinus strobus,pin blanc,Conifère,75,DHP,N,,Privés,Avenue de l'Assomption,46.77994063074482,-71.24386405396028
295032,tronçon,Acer rubrum,érable rouge,Feuillu,72,DHP,N,,Privés,Avenue de l'Assomption,46.78008076388578,-71.24383570617111
295033,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,55,DHP,N,,Privés,Avenue de l'Assomption,46.78027967961421,-71.24399286066799
295034,tronçon,Pseudotsuga menziesii glauca,sapin bleu de Douglas,Conifère,49,DHP,N,,Privés,Avenue de l'Assomption,46.780593797065855,-71.24425203744107
295035,tronçon,Pinus strobus,pin blanc,Conifère,73,DHP,N,,Privés,Avenue de l'Assomption,46.780870918725455,-71.24451286811627
295036,tronçon,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Avenue de l'Assomption,46.78096729855642,-71.24467038162616
295037,tronçon,Juglans cinerea,noyer cendré,Feuillu,41,DHP,N,,Privés,Avenue de l'Assomption,46.78102725852434,-71.2445627458099
295038,tronçon,Larix,mélèze,Conifère,61,DHP,N,,Privés,Avenue de l'Assomption,46.78122561218456,-71.24475358153309
295039,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,59,DHP,N,,Privés,Avenue de l'Assomption,46.78053623340892,-71.24348313401026
295040,tronçon,Quercus rubra,chêne rouge,Feuillu,89,M,O,,Privés,Avenue de l'Assomption,46.7804931750516,-71.24286683044309
295041,tronçon,Quercus rubra,chêne rouge,Feuillu,102,DHP,N,,Privés,Avenue de l'Assomption,46.78060391111802,-71.24284347104349
295042,tronçon,Quercus rubra,chêne rouge,Feuillu,96,DHP,N,,Privés,Avenue de l'Assomption,46.7807049482789,-71.24360709317044
295043,tronçon,Pinus strobus,pin blanc,Conifère,76,DHP,N,,Privés,Avenue de l'Assomption,46.781245292038534,-71.24339958454111
295044,tronçon,Quercus rubra,chêne rouge,Feuillu,68,DHP,N,,Privés,Avenue de l'Assomption,46.78143569896294,-71.24385696069677
295045,tronçon,Fraxinus americana,frêne blanc,Feuillu,69,DHP,N,,Privés,Chemin Saint-Louis,46.7859911048862,-71.24659275746586
295046,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,53,DHP,N,,Privés,Chemin Saint-Louis,46.786075564103946,-71.2435940432149
295047,tronçon,Quercus rubra,chêne rouge,Feuillu,88,DHP,N,,Privés,Chemin Saint-Louis,46.786324287381845,-71.24477305755232
295048,tronçon,Quercus rubra,chêne rouge,Feuillu,97,M,O,,Privés,Avenue James-LeMoine,46.78663274606435,-71.24158143381979
295049,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,58,DHP,N,,Privés,Avenue James-LeMoine,46.78636701262028,-71.24278641930124
295050,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,56,DHP,N,,Privés,Avenue James-LeMoine,46.786702575131486,-71.24117889642557
295051,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,91,DHP,N,,Privés,Avenue James-LeMoine,46.787000299311174,-71.24153647505204
295052,tronçon,Fraxinus americana,frêne blanc,Feuillu,94,DHP,N,,Privés,Avenue James-LeMoine,46.78808083623554,-71.24367016054869
295053,tronçon,Fraxinus americana,frêne blanc,Feuillu,91,DHP,N,,Privés,Avenue James-LeMoine,46.78806637699929,-71.24330624615683
295054,tronçon,Quercus rubra,chêne rouge,Feuillu,69,DHP,N,,Privés,Avenue James-LeMoine,46.787936260735044,-71.24366087377501
295055,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,64,DHP,N,,Privés,Avenue James-LeMoine,46.78837263327583,-71.24390174356706
295056,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,59,DHP,N,,Privés,Avenue James-LeMoine,46.78838559755643,-71.2443596698719
295057,tronçon,Juglans cinerea,noyer cendré,Feuillu,27,DHP,N,,Privés,Avenue James-LeMoine,46.78843169512569,-71.24473446217674
295058,tronçon,Juglans cinerea,noyer cendré,Feuillu,27,DHP,N,,Privés,Avenue Duquet,46.78745617238787,-71.24185912472085
295059,tronçon,Juglans cinerea,noyer cendré,Feuillu,92,M,O,,Privés,Avenue Duquet,46.7875744332386,-71.24191424084482
295061,tronçon,Quercus rubra,chêne rouge,Feuillu,87,DHP,N,,Privés,Chemin Saint-Louis,46.786865965004225,-71.24694839076757
295062,tronçon,Pinus strobus,pin blanc,Conifère,72,DHP,N,,Privés,Avenue de l'Assomption,46.78124334683094,-71.24363391484803
295063,tronçon,Quercus rubra,chêne rouge,Feuillu,127,DHP,N,,Privés,Avenue de l'Assomption,46.7814510883324,-71.24231952498889
295064,tronçon,Quercus rubra,chêne rouge,Feuillu,109,M,O,,Privés,Avenue de l'Assomption,46.781942584004504,-71.24189754379606
295065,tronçon,Quercus rubra,chêne rouge,Feuillu,82,DHP,N,,Privés,Chemin Saint-Louis,46.78065383528328,-71.24801982415627
295066,tronçon,Quercus rubra,chêne rouge,Feuillu,96,DHP,N,,Privés,Chemin Saint-Louis,46.783640903999114,-71.24587317966063
295067,tronçon,Quercus rubra,chêne rouge,Feuillu,97,DHP,N,,Privés,Chemin Saint-Louis,46.783660005455225,-71.24573620192056
295068,tronçon,Quercus rubra,chêne rouge,Feuillu,108,DHP,N,,Privés,Chemin Saint-Louis,46.78339077659173,-71.24373448261595
295069,tronçon,Quercus rubra,chêne rouge,Feuillu,92,DHP,N,,Privés,Chemin Saint-Louis,46.783119063258866,-71.24302295627498
295070,tronçon,Acer saccharum,érable à sucre,Feuillu,107,DHP,N,,Privés,Chemin Saint-Louis,46.78303642818085,-71.24185291556273
295071,tronçon,Acer saccharum,érable à sucre,Feuillu,105,DHP,N,,Privés,Chemin Saint-Louis,46.78310104880874,-71.24139213210245
295072,tronçon,Acer saccharum,érable à sucre,Feuillu,107,DHP,N,,Privés,Chemin Saint-Louis,46.783208172198655,-71.24181517272703
295073,tronçon,Acer saccharum,érable à sucre,Feuillu,95,DHP,N,,Privés,Chemin Saint-Louis,46.7832013414499,-71.24159205506993
295074,tronçon,Quercus rubra,chêne rouge,Feuillu,108,M,O,,Privés,Chemin Saint-Louis,46.78340440624341,-71.24189791569509
295075,tronçon,Quercus rubra,chêne rouge,Feuillu,99,DHP,N,,Privés,Chemin Saint-Louis,46.78322415675992,-71.24088498873796
295076,tronçon,Quercus rubra,chêne rouge,Feuillu,96,DHP,N,,Privés,Chemin Saint-Louis,46.78336874813278,-71.24336416990901
295077,tronçon,Quercus rubra,chêne rouge,Feuillu,109,DHP,N,,Privés,Chemin Saint-Louis,46.78351081525035,-71.24102185386874
295078,tronçon,Pinus strobus,pin blanc,Conifère,112,M,O,,Privés,Chemin Saint-Louis,46.78479611606547,-71.24164747157398
295082,tronçon,Acer saccharum,érable à sucre,Feuillu,107,DHP,N,,Privés,Chemin Saint-Louis,46.784865050236576,-71.24215766019152
295083,Lieu public,Pinus strobus,pin blanc,Conifère,74,DHP,N,,Privés,Ilot Cimetière Mount Hermon,46.779524477350165,-71.24820372373738
295144,tronçon,Juglans cinerea,noyer cendré,Feuillu,58,DHP,N,,Privés,Grande Allée Ouest,46.79218261121964,-71.2408083345252
295145,tronçon,Juglans cinerea,noyer cendré,Feuillu,57,DHP,N,,Privés,Grande Allée Ouest,46.79190716597479,-71.24057360955409
295146,tronçon,Salix alba 'Tristis',saule blanc 'Tristis',Feuillu,157,DHS,N,,Privés,Rue du Mont-Saint-Denis,46.79230923550824,-71.23876527885133
295147,tronçon,Quercus rubra,chêne rouge,Feuillu,124,DHP,N,,Privés,Avenue du Ravin,46.7906985377496,-71.23836972076413
295148,tronçon,Juglans cinerea,noyer cendré,Feuillu,59,DHP,N,,Privés,Avenue Chaumont,46.79123493211242,-71.2391335434317
295149,tronçon,Quercus rubra,chêne rouge,Feuillu,132,DHP,N,,Privés:Parc Canada,Rue De Laune,46.79249530780934,-71.23747093630129
295150,tronçon,Quercus rubra,chêne rouge,Feuillu,110,DHP,N,,Privés:Parc Canada,Rue De Laune,46.79260678924912,-71.23759416190268
295151,tronçon,Acer saccharinum,érable argenté,Feuillu,78,DHP,N,,Privés,Grande Allée Ouest,46.79249965644821,-71.24087616270137
295152,tronçon,Acer saccharum,érable à sucre,Feuillu,95,DHP,N,,Privés,Grande Allée Ouest,46.79270479275985,-71.2405537425494
295153,tronçon,Robinia pseudoacacia,robinier faux-acacia,Feuillu,90,M,O,,Privés,Grande Allée Ouest,46.792903814477086,-71.24117874358306
295154,tronçon,Juglans cinerea,noyer cendré,Feuillu,87,M,O,,Privés,Avenue du Cardinal-Bégin,46.79457588467223,-71.23906113046172
295155,tronçon,Pinus resinosa,pin rouge,Conifère,45,DHP,N,,Privés,Avenue du Cardinal-Bégin,46.795474844351105,-71.23967525102896
295156,tronçon,Picea pungens 'Koster',épinette bleue De Koster,Conifère,64,DHP,N,,Privés,Avenue du Cardinal-Bégin,46.795793189888016,-71.24050476730218
295157,tronçon,Juglans cinerea,noyer cendré,Feuillu,53,DHP,N,,Privés,Avenue Belvédère,46.79502148493182,-71.23711124211394
295158,tronçon,Quercus rubra,chêne rouge,Feuillu,140,DHP,N,,Privés,Grande Allée Ouest,46.792095510106364,-71.24161087255229
295160,tronçon,Salix alba 'Tristis',saule blanc 'Tristis',Feuillu,100,DHP,N,,Privés,Grande Allée Ouest,46.793113496645915,-71.23807263998545
295161,tronçon,Acer saccharinum,érable argenté,Feuillu,113,DHP,N,,Privés,Grande Allée Ouest,46.795434170039265,-71.23576613072792
295162,tronçon,Larix,mélèze,Conifère,81,M,O,,Privés,Grande Allée Ouest,46.79488056591968,-71.23359519606427
295163,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,87,DHP,N,,Privés,Grande Allée Ouest,46.7954017320985,-71.23142869053922
295164,tronçon,Quercus rubra,chêne rouge,Feuillu,131,DHS,N,,Privés,Grande Allée Ouest,46.796173176217195,-71.23220249843408
295165,tronçon,Quercus rubra,chêne rouge,Feuillu,120,DHP,N,,Privés,Grande Allée Ouest,46.79658193624764,-71.23270884126656
295166,tronçon,Quercus rubra,chêne rouge,Feuillu,84,DHP,N,,Privés,Grande Allée Ouest,46.79623542191832,-71.23433412801921
295167,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,96,DHP,N,,Privés,Grande Allée Ouest,46.797286124798866,-71.23249068085701
295168,tronçon,Acer saccharinum,érable argenté,Feuillu,116,DHP,N,,Privés,Grande Allée Ouest,46.793012772017136,-71.23756755060019
295170,tronçon,Quercus rubra,chêne rouge,Feuillu,89,DHP,N,,Privés:Parc Canada,Rue De Laune,46.79300789699016,-71.23810882990512
295171,tronçon,Quercus rubra,chêne rouge,Feuillu,89,DHP,N,,Privés:Parc Canada,Rue De Laune,46.79329146969596,-71.23847204311963
295172,tronçon,Quercus rubra,chêne rouge,Feuillu,96,DHP,N,,Privés:Parc Canada,Rue De Laune,46.79294927953081,-71.23804693438363
295204,tronçon,Fraxinus pennsylvanica,frêne rouge,Feuillu,69,DHP,N,,Privés,Grande Allée Ouest,46.80263241046573,-71.22360373248675
295205,tronçon,Fraxinus pennsylvanica,frêne rouge,Feuillu,59,DHP,N,,Privés,Grande Allée Ouest,46.80260025055266,-71.22386514608256
295206,tronçon,Fraxinus pennsylvanica,frêne rouge,Feuillu,70,DHP,N,,Privés,Grande Allée Ouest,46.8026523223476,-71.22395467219094
295207,tronçon,Quercus rubra,chêne rouge,Feuillu,120,DHP,N,,Public,Grande Allée Est,46.802406195307746,-71.22311837259241
295208,tronçon,Fraxinus americana,frêne blanc,Feuillu,81,DHP,N,,Privés,Grande Allée Ouest,46.79796673472969,-71.23130143743562
295209,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,123,DHP,N,,Privés,Grande Allée Ouest,46.798845858158536,-71.2298283939196
295210,tronçon,Acer saccharinum,érable argenté,Feuillu,125,DHP,N,,Privés,Avenue du Parc,46.800481096310584,-71.2287732983103
295211,tronçon,Betula papyrifera,bouleau à papier,Feuillu,62,DHP,N,,Privés,Avenue du Parc,46.79995793612818,-71.22839316342134
295212,tronçon,Betula papyrifera,bouleau à papier,Feuillu,34,DHP,N,,Privés,Avenue du Parc,46.799962299061114,-71.22840028361912
295213,tronçon,Betula papyrifera,bouleau à papier,Feuillu,27,DHP,N,,Privés,Avenue du Parc,46.799951366000506,-71.22838793924998
295214,tronçon,Quercus palustris,chêne des marais,Feuillu,40,DHP,N,,Privés,Grande Allée Est,46.80521404753676,-71.21892015978938
295215,tronçon,Fraxinus pennsylvanica,frêne rouge,Feuillu,62,DHP,N,,Privés,Grande Allée Est,46.806711386782105,-71.21608398084696
295216,tronçon,Acer saccharinum,érable argenté,Feuillu,87,DHS,N,,Privés,Grande Allée Est,46.80665951869644,-71.21614784801241
295223,tronçon,Fraxinus pennsylvanica,frêne rouge,Feuillu,75,DHP,N,,Privés,Avenue De Bourlamaque,46.80128460500516,-71.22589069356337
305770,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,87,DHP,N,,Privés,Chemin Sainte-Foy,46.79671065510083,-71.24979722628026
307042,tronçon,Larix decidua,mélèze d'Europe,Conifère,71,DHP,N,,Privés,Rue Racine,46.85475124199037,-71.35547173977238
307043,tronçon,Abies lasiocarpa,Sapin des Rocheuses,Conifère,30,DHP,N,,Privés,Rue Racine,46.85473134901251,-71.3541408660026
307044,tronçon,Pinus strobus,pin blanc,Conifère,99,DHP,N,,Privés,Rue Racine,46.85440046330021,-71.35353902269371
307045,tronçon,Picea abies,épinette de Norvège,Conifère,84,DHP,N,,Privés,Rue Racine,46.85413445240832,-71.35336495562534
307046,tronçon,Chamaecyparis pisifera,Cyprès de Sawara,Feuillu,50,DHP,N,,Privés,Rue Racine,46.8539640483643,-71.3524225515892
307047,tronçon,Chamaecyparis pisifera,Cyprès de Sawara,Feuillu,34,DHP,N,,Privés,Rue Racine,46.85399115740198,-71.35237744899892
307048,tronçon,Chamaecyparis pisifera,Cyprès de Sawara,Feuillu,38,DHP,N,,Privés,Rue Racine,46.853989288009615,-71.35251007994682
307049,tronçon,Pinus resinosa,pin rouge,Conifère,58,DHP,N,,Privés,Rue Racine,46.8545299003247,-71.3526606216987
307050,tronçon,Pinus resinosa,pin rouge,Conifère,63,DHP,N,,Privés,Rue Racine,46.8545811673305,-71.35264535534795
307051,tronçon,Pinus resinosa,pin rouge,Conifère,64,DHP,N,,Privés,Rue Racine,46.85452999605659,-71.35254994052325
307052,tronçon,Chamaecyparis pisifera,Cyprès de Sawara,Feuillu,25,DHP,N,,Privés,Rue Racine,46.85473429139716,-71.35281963956339
307053,tronçon,Chamaecyparis pisifera,Cyprès de Sawara,Feuillu,22,DHP,N,,Privés,Rue Racine,46.85475642347827,-71.3528098396324
307054,tronçon,Picea abies,épinette de Norvège,Conifère,97,DHP,N,,Privés,Rue Lessard,46.85145750073966,-71.35331721371365
307055,tronçon,Fraxinus excelsior,frêne d'Europe,Feuillu,51,M,O,,Privés,Rue Lavallée,46.84872315939883,-71.35283016122165
307056,tronçon,Larix decidua,mélèze d'Europe,Conifère,82,DHP,N,,Privés,Rue Lavallée,46.84849109903752,-71.3523312253555
307057,tronçon,Juglans nigra,noyer noir,Feuillu,68,DHP,N,,Privés,Rue Fortier,46.84907081328831,-71.35340010188652
307058,tronçon,Juglans nigra,noyer noir,Feuillu,59,M,O,,Privés,Rue Fortier,46.847999606356716,-71.35381033918387
307059,tronçon,Acer saccharinum,érable argenté,Feuillu,117,DHP,N,,Privés,Rue Saint-Maurice,46.84366013815974,-71.36464969107946
307060,tronçon,Abies lasiocarpa,Sapin des Rocheuses,Conifère,51,DHP,N,,Privés,Rue de l'Hôpital,46.85561265143105,-71.37285272632053
307061,tronçon,Picea abies,épinette de Norvège,Conifère,87,DHP,N,,Privés,Rue Gustave-Gagnon,46.85763975050162,-71.36289250043765
307062,tronçon,Picea abies,épinette de Norvège,Conifère,83,DHP,N,,Privés,Rue Gustave-Gagnon,46.857519956982046,-71.36299009631796
307063,tronçon,Picea abies,épinette de Norvège,Conifère,85,DHP,N,,Privés,Rue Gustave-Gagnon,46.857460137931426,-71.36291999675866
307064,tronçon,Picea abies,épinette de Norvège,Conifère,59,DHP,N,,Privés,Rue Gustave-Gagnon,46.8572901723749,-71.36282060500511
307065,tronçon,Picea abies,épinette de Norvège,Conifère,78,M,O,,Privés,Rue Gustave-Gagnon,46.857297163466455,-71.36289805461215
307066,tronçon,Picea abies,épinette de Norvège,Conifère,63,DHP,N,,Privés,Rue Gustave-Gagnon,46.85734049804936,-71.3629805062081
307067,tronçon,Picea abies,épinette de Norvège,Conifère,68,DHP,N,,Privés,Rue Gustave-Gagnon,46.857373184934644,-71.36306719388014
307068,tronçon,Larix x marschlinsii,Mélèze de Dunkeld,Conifère,71,DHP,N,,Privés,Boulevard Valcartier,46.86124102950799,-71.37034707565384
307069,tronçon,Larix x marschlinsii,Mélèze de Dunkeld,Conifère,60,DHP,N,,Privés,Boulevard Valcartier,46.861222147369226,-71.3702463436084
307070,tronçon,Pinus sylvestris,pin sylvestre,Conifère,72,DHP,N,,Privés,Boulevard Valcartier,46.86114738648567,-71.3707575388489
307071,tronçon,Pinus sylvestris,pin sylvestre,Conifère,49,DHP,N,,Privés,Boulevard Valcartier,46.861084955306644,-71.37092854133975
307072,tronçon,Pinus sylvestris,pin sylvestre,Conifère,117,DHP,N,,Privés,Boulevard Valcartier,46.86110499645203,-71.37097264554313
307073,tronçon,Pinus sylvestris,pin sylvestre,Conifère,63,DHP,N,,Privés,Boulevard Valcartier,46.86110985796669,-71.37103839432322
307074,tronçon,Pinus strobus,pin blanc,Conifère,91,DHP,N,,Privés,Rue du Parc-Marchand,46.861040201457655,-71.37223959268329
307075,tronçon,Pinus strobus,pin blanc,Conifère,84,DHP,N,,Privés,Rue du Parc-Marchand,46.86104781479914,-71.37232781384166
307076,tronçon,Pinus strobus,pin blanc,Conifère,109,DHP,N,,Privés,Boulevard Valcartier,46.8641446374459,-71.37561385049564
307077,tronçon,Picea glauca,épinette blanche,Conifère,74,DHP,N,,Privés,Rue de la Rivière-Nelson,46.865405311358316,-71.3881550843477
307078,Lieu public,Pinus strobus,pin blanc,Conifère,101,DHP,N,,Public,Parc linéaire des rivières St-Charles et du Berger,46.869515583932255,-71.37639730296623
307079,tronçon,Picea glauca,épinette blanche,Conifère,86,DHP,N,,Privés,Rue Gustave-Gagnon,46.85780695600658,-71.3621953832243
307080,tronçon,Larix laricina,mélèze laricin,Conifère,57,DHP,N,,Privés,Rue Parent,46.857721388789265,-71.35544039477108
307081,tronçon,Fagus grandifolia,hêtre à grandes feuilles,Feuillu,114,DHP,N,,Privés,Rue des Dames-Ursulines,46.85326592458955,-71.34994820369478
307082,tronçon,Pinus strobus,pin blanc,Conifère,82,DHP,N,,Privés,Rue des Dames-Ursulines,46.85373015938932,-71.34955008700324
307083,tronçon,Pinus strobus,pin blanc,Conifère,94,DHP,N,,Privés,Rue des Dames-Ursulines,46.854059169628705,-71.35018681729086
307084,tronçon,Pinus strobus,pin blanc,Conifère,96,DHP,N,,Privés,Rue des Dames-Ursulines,46.85408248475381,-71.35087375318959
307096,tronçon,Picea pungens,épinette du Colorado,Conifère,72,DHP,N,,Privés,Avenue des Grands-Pins,46.78216116433536,-71.25034790452544
307097,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,54,M,O,,Privés,Boulevard Laurier,46.785780129485794,-71.25379674028581
307098,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,51,DHP,N,,Privés,Boulevard Laurier,46.785826900678764,-71.25385567638924
307099,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,44,DHP,N,,Privés,Boulevard Laurier,46.78576182742212,-71.25400892349438
307100,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,47,DHP,N,,Privés,Boulevard Laurier,46.78573669670987,-71.25404224579978
307101,tronçon,Quercus rubra,chêne rouge,Feuillu,118,DHP,N,,Privés,Chemin Gomin,46.7876511657445,-71.25166291749089
307102,tronçon,Quercus rubra,chêne rouge,Feuillu,85,DHP,N,,Privés,Chemin Gomin,46.787678276610066,-71.25158276966083
307103,tronçon,Quercus rubra,chêne rouge,Feuillu,104,DHP,N,,Privés,Chemin Gomin,46.78758557962695,-71.25144676876742
307104,tronçon,Quercus rubra,chêne rouge,Feuillu,128,DHP,N,,Privés,Chemin Gomin,46.78769952788744,-71.2514235866571
307105,tronçon,Crataegus punctata,aubépine ponctuée,Feuillu,88,M,O,,Privés,Rue du Parc-Thornhill,46.792499675844724,-71.24445561183275
307106,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,113,DHP,N,,Privés,Rue du Parc-Thornhill,46.792593868826295,-71.24429650056567
307107,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,51,DHP,N,,Privés,Rue du Parc-Thornhill,46.79259176981003,-71.24424575235352
307108,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,36,DHP,N,,Privés,Rue du Parc-Thornhill,46.79260056041392,-71.24426357027437
307109,tronçon,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,48,DHP,N,,Privés,Rue du Parc-Thornhill,46.79263112873109,-71.24429701427006
307110,tronçon,Fraxinus americana,frêne blanc,Feuillu,99,DHP,N,,Privés,Avenue du Cardinal-Bégin,46.79534221397103,-71.24035639710809
307118,Lieu public,Quercus rubra,chêne rouge,Feuillu,107,DHP,N,,Privés,Ilot Dominicaines de la Trinité,46.795523857108726,-71.24059059585788
307120,tronçon,Tsuga canadensis,pruche de L'est,Conifère,58,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75803862779356,-71.32279993037321
307121,tronçon,Tsuga canadensis,pruche de L'est,Conifère,55,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.757941640924976,-71.32287939313218
307122,tronçon,Tsuga canadensis,pruche de L'est,Conifère,44,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75793189052568,-71.32294670053803
307123,tronçon,Tsuga canadensis,pruche de L'est,Conifère,48,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.757955601510744,-71.32300102101885
307124,tronçon,Tsuga canadensis,pruche de L'est,Conifère,55,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75789333191867,-71.32410929077982
307125,tronçon,Tsuga canadensis,pruche de L'est,Conifère,43,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.7578902110339,-71.32414664300454
307126,tronçon,Tsuga canadensis,pruche de L'est,Conifère,58,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75787716187957,-71.32417346300065
307127,tronçon,Tsuga canadensis,pruche de L'est,Conifère,60,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.757850390555674,-71.32412317968243
307128,tronçon,Tsuga canadensis,pruche de L'est,Conifère,65,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75785572857168,-71.32417521758235
307129,tronçon,Tsuga canadensis,pruche de L'est,Conifère,52,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.757697816802725,-71.32428710322448
307130,tronçon,Tsuga canadensis,pruche de L'est,Conifère,56,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75752555417439,-71.32440916319301
307131,tronçon,Tsuga canadensis,pruche de L'est,Conifère,66,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75752316406992,-71.32375036047657
307132,tronçon,Tsuga canadensis,pruche de L'est,Conifère,56,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75752122517061,-71.32382099343695
307133,tronçon,Tsuga canadensis,pruche de L'est,Conifère,41,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.757471380733605,-71.32380152742694
307134,tronçon,Tsuga canadensis,pruche de L'est,Conifère,58,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75748750571555,-71.32374358596195
307135,tronçon,Tsuga canadensis,pruche de L'est,Conifère,72,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.755578011964054,-71.32274113831943
307136,tronçon,Tsuga canadensis,pruche de L'est,Conifère,52,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.755371168444185,-71.3226892560841
307137,tronçon,Tsuga canadensis,pruche de L'est,Conifère,49,DHP,N,,Privés,Chemin des Quatre-Bourgeois,46.75535896191382,-71.32300681634544
307142,tronçon,Aesculus hippocastanum,marronnier d'Inde,Feuillu,72,DHP,N,,Privés,Avenue De Bourlamaque,46.803060663463434,-71.22766254897658
307143,tronçon,Tilia platyphyllos,tilleul de Hollande,Feuillu,80,DHP,N,,Privés,Avenue Wilfrid-Laurier,46.804794376788365,-71.21737837891213
307144,Lieu public,Tilia americana,tilleul d'Amérique,Feuillu,90,DHP,N,,Privés:S.I.Q.,Ilot SIQ-Rue du Bon-Pasteur,46.80743812945647,-71.21938157522005
307146,Lieu public,Aesculus hippocastanum,marronnier d'Inde,Feuillu,78,DHS,N,,Privés,Collège François-de-Laval,46.814637882818545,-71.20452813465617
307147,Lieu public,Aesculus hippocastanum,marronnier d'Inde,Feuillu,66,DHP,N,,Privés,Collège François-de-Laval,46.81471678191509,-71.20455871542416
307150,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,103,DHP,N,,Privés,Avenue des Braves,46.799995396697334,-71.23970037653444
307151,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,97,DHP,N,,Privés,Avenue des Braves,46.79985986805022,-71.2395607777845
307152,tronçon,Tilia platyphyllos,tilleul de Hollande,Feuillu,65,DHP,N,,Privés,Avenue des Braves,46.79978681040047,-71.23946573964307
307153,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,159,DHP,N,,Privés,Avenue De Bienville,46.80023451617542,-71.23921387889668
307154,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,172,DHP,N,,Privés,Avenue De Bienville,46.80016706875275,-71.23913745505527
307155,tronçon,Juglans nigra,noyer noir,Feuillu,64,DHP,N,,Privés,Avenue des Braves,46.799320550020134,-71.23980581043168
307156,tronçon,Cercidiphyllum japonicum,Katsura,Feuillu,56,DHP,N,,Privés,Avenue des Braves,46.79899241090241,-71.23943325301406
307157,tronçon,Cercidiphyllum japonicum,Katsura,Feuillu,43,DHP,N,,Privés,Avenue des Braves,46.79898177560267,-71.23937639509082
307158,tronçon,Tilia platyphyllos,tilleul de Hollande,Feuillu,84,M,O,,Privés,Avenue Oak,46.779896969524756,-71.25200815071125
307159,tronçon,Pseudotsuga menziesii glauca,sapin bleu de Douglas,Conifère,41,DHP,N,,Privés,Rue Brulart,46.78142757889343,-71.25598908405867
307160,tronçon,Picea omorika,épinette de Serbie,Conifère,38,DHP,N,,Privés,Avenue Charles-Fitzpatrick,46.772996261546346,-71.26205965924845
307161,tronçon,Picea abies,épinette de Norvège,Conifère,91,DHP,N,,Privés,Avenue Charles-Fitzpatrick,46.77292547515203,-71.26239632133947
307162,tronçon,Quercus rubra,chêne rouge,Feuillu,124,DHP,N,,Privés,Rue Adolphe-Chapleau,46.77205670591401,-71.26355787343883
307163,tronçon,Tilia dasystyla,tilleul à style velu,Feuillu,107,DHP,N,,Privés,Rue de Valcourt,46.7628125218487,-71.27779804801405
307164,tronçon,Juglans cinerea,noyer cendré,Feuillu,75,M,O,,Privés,Route de l'Église,46.7644797498218,-71.28503946035235
307165,tronçon,Acer rubrum,érable rouge,Feuillu,82,M,O,,Public,Rue Anthony-Law,46.77054452796125,-71.27190815806797
307166,tronçon,Ginkgo biloba,arbre aux quarante écus,Feuillu,57,DHP,N,,Privés,Rue des Grondines,46.762547075724605,-71.28949810984047
307168,tronçon,Acer platanoides,érable de Norvège,Feuillu,101,DHS,N,,Privés,Avenue Baillairgé,46.794216911234955,-71.26632223823891
307170,tronçon,Larix decidua,mélèze d'Europe,Conifère,43,DHP,N,,Privés,Avenue de Vimy,46.79169298287263,-71.25911554141803
307171,tronçon,Larix decidua,mélèze d'Europe,Conifère,54,DHP,N,,Privés,Avenue de Vimy,46.79171947906795,-71.2591369899167
307172,tronçon,Larix decidua,mélèze d'Europe,Conifère,45,DHP,N,,Privés,Avenue de Vimy,46.791745980819286,-71.25915760019258
307173,tronçon,Larix decidua,mélèze d'Europe,Conifère,56,DHP,N,,Privés,Avenue de Vimy,46.791778801148176,-71.25918588354295
307174,tronçon,Larix decidua,mélèze d'Europe,Conifère,64,DHP,N,,Privés,Avenue de Vimy,46.791808149080516,-71.25921413119441
307175,tronçon,Larix decidua,mélèze d'Europe,Conifère,43,DHP,N,,Privés,Avenue de Vimy,46.79184157865222,-71.25923736704104
307176,tronçon,Larix decidua,mélèze d'Europe,Conifère,44,DHP,N,,Privés,Avenue de Vimy,46.791880180918646,-71.25926742155521
307177,tronçon,Larix decidua,mélèze d'Europe,Conifère,55,DHP,N,,Privés,Avenue de Vimy,46.791913574723445,-71.25929740285773
307178,tronçon,Larix decidua,mélèze d'Europe,Conifère,58,DHP,N,,Privés,Avenue de Vimy,46.79195624741357,-71.25932413520758
307179,tronçon,Larix decidua,mélèze d'Europe,Conifère,52,DHP,N,,Privés,Avenue de Vimy,46.79199435223525,-71.25934238079373
307180,tronçon,Larix decidua,mélèze d'Europe,Conifère,56,DHP,N,,Privés,Avenue de Vimy,46.79203934013017,-71.25936999721118
307181,tronçon,Larix decidua,mélèze d'Europe,Conifère,59,DHP,N,,Privés,Avenue de Vimy,46.79207507932182,-71.25939495549724
307182,tronçon,Larix decidua,mélèze d'Europe,Conifère,51,DHP,N,,Privés,Avenue de Vimy,46.79212925436532,-71.25943450332417
307183,tronçon,Larix decidua,mélèze d'Europe,Conifère,56,DHP,N,,Privés,Avenue de Vimy,46.79217999285822,-71.25946725695809
307190,tronçon,Quercus palustris,chêne des marais,Feuillu,74,DHP,N,,Privés,Rue Pierre-Maufay,46.788553032397836,-71.26214943904807
307191,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,74,DHP,N,,Privés,Rue Paradis,46.78686026687786,-71.26552916602193
307192,tronçon,syringa reticulata ssp amurensis,Lilas de l'amour,Feuillu,43,M,O,,Privés,Rue Paradis,46.786412034039756,-71.26456462506872
307193,tronçon,Juglans nigra,noyer noir,Feuillu,65,DHP,N,,Privés,Rue Rochette,46.788268432693705,-71.26545567729707
307194,tronçon,Liriodendron tulipifera,Tulipier de Virginie,Feuillu,27,M,O,,Privés,Rue Rochette,46.789239725938685,-71.26716057932524
307195,Lieu public,Juglans nigra,noyer noir,Feuillu,83,DHP,N,,Privés,Université Laval,46.7873691345641,-71.27464066051039
307196,Lieu public,Acer saccharinum,érable argenté,Feuillu,160,M,O,,Privés,Ilot Cimetière Belmont,46.79042914811503,-71.27852829682944
307197,Lieu public,Tsuga canadensis,pruche de L'est,Conifère,75,DHP,N,,Privés,Université Laval,46.77581258770861,-71.27393749957565
307198,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,95,DHP,N,,Privés,Chemin Sainte-Foy,46.79061645556159,-71.26488849202295
307199,tronçon,Ostrya virginiana,ostryer de Virginie,Feuillu,57,DHP,N,,Privés,Rue Montreuil,46.77180314288279,-71.29377961804768
307323,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,49,DHP,N,,Privés,Boulevard René-Lévesque Ouest,46.7867292122008,-71.2569314406109
307324,tronçon,Quercus palustris,chêne des marais,Feuillu,75,DHP,N,,Privés,Rue Eymard,46.78962283501309,-71.25355231157398
307376,tronçon,Acer saccharinum,érable argenté,Feuillu,150,DHP,N,,Privés,Rue Loyola,46.85435251877059,-71.20438211744109
307413,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,50,DHP,N,,Privés,4e Avenue,46.83367939682133,-71.23358267816927
307414,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,47,DHP,N,,Privés,4e Avenue,46.833705620528136,-71.23350979520124
307415,tronçon,Ginkgo biloba,arbre aux quarante écus,Feuillu,50,DHP,N,,Privés,Avenue Bergemont,46.83355729147651,-71.2271235813602
307416,tronçon,Ginkgo biloba,arbre aux quarante écus,Feuillu,68,M,O,,Privés,Avenue Bergemont,46.83359458624757,-71.22708458715617
307420,tronçon,Acer saccharinum,érable argenté,Feuillu,129,DHP,N,,Privés,8e Avenue,46.82549646794351,-71.22382304165265
307421,tronçon,Fraxinus pennsylvanica,frêne rouge,Feuillu,67,DHP,N,,Privés,8e Avenue,46.82557416824868,-71.22332234896258
307422,tronçon,Acer saccharinum,érable argenté,Feuillu,99,DHP,N,,Privés,8e Avenue,46.825770776876,-71.22328080245101
307423,tronçon,Acer saccharinum,érable argenté,Feuillu,107,DHS,N,,Privés,8e Avenue,46.82576717990834,-71.2233631188408
307424,tronçon,Acer saccharinum,érable argenté,Feuillu,77,DHP,N,,Privés,8e Avenue,46.82574532063723,-71.223405515213
307425,tronçon,Acer saccharinum,érable argenté,Feuillu,85,DHP,N,,Privés,8e Avenue,46.82570575998456,-71.2234843606245
307426,tronçon,Acer saccharinum,érable argenté,Feuillu,141,DHS,N,,Privés,8e Avenue,46.825623491904416,-71.22365025317814
307852,tronçon,Juglans cinerea,noyer cendré,Feuillu,123,M,O,,Privés,Rue de Strasbourg,46.773805086108304,-71.31936381768485
307853,tronçon,Abies alba,Sapin blanc,Conifère,56,DHP,N,,Privés,Carré Bochart,46.772137235387966,-71.31311794955317
307854,tronçon,Pseudotsuga Menziesii,Sapin de Douglas,Conifère,53,DHP,N,,Privés,Avenue Wilfrid-Pelletier,46.77195617532159,-71.30935706492403
307856,tronçon,Pinus ponderosa,Pin Ponderosa,Conifère,48,DHP,N,,Privés,Avenue Wilfrid-Pelletier,46.77204020942049,-71.31013930323311
307857,tronçon,Picea pungens,épinette du Colorado,Conifère,68,DHP,N,,Privés,Rue De Monts,46.77431202789124,-71.3096586000356
309008,tronçon,Tilia platyphyllos,tilleul de Hollande,Feuillu,98,DHS,N,,Privés,Le Trait-Carré Ouest,46.85927515000846,-71.27056128168411
309009,tronçon,Aesculus hippocastanum,marronnier d'Inde,Feuillu,92,DHS,N,,Privés,Rue Savio,46.87400556782577,-71.17402272892136
309010,tronçon,Larix x marschlinsii,Mélèze de Dunkeld,Conifère,68,DHP,N,,Privés,Côte de Courville,46.88038540411417,-71.15737797354203
309011,tronçon,Larix x marschlinsii,Mélèze de Dunkeld,Conifère,46,DHP,N,,Privés,Côte de Courville,46.88030921876835,-71.15756206554305
309012,tronçon,Larix x marschlinsii,Mélèze de Dunkeld,Conifère,52,DHP,N,,Privés,Côte de Courville,46.88028693413339,-71.1576154553043
309013,tronçon,Larix x marschlinsii,Mélèze de Dunkeld,Conifère,87,M,O,,Privés,Côte de Courville,46.8802268010956,-71.15776452798042
309014,tronçon,Larix x marschlinsii,Mélèze de Dunkeld,Conifère,77,M,O,,Privés,Côte de Courville,46.880378454402084,-71.15787518826514
309015,tronçon,Juglans cinerea,noyer cendré,Feuillu,57,DHP,N,,Privés,Côte de Courville,46.88057344323305,-71.157470630336
309019,Lieu public,Acer saccharinum,érable argenté,Feuillu,135,DHP,N,,Public:Terrain Privé,Ilot Église St-Louis-de-Courville,46.88508985588963,-71.15808007464126
309027,tronçon,Juglans cinerea,noyer cendré,Feuillu,168,M,O,,Privés,Avenue Saint-Michel,46.89109979824168,-71.20925949304012
309028,tronçon,Quercus robur,chêne à feuille pédonculée,Feuillu,73,DHP,N,,Privés,Rue de Sologne,46.863856733778526,-71.24958787531139
309032,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,136,DHP,N,,Privés,Boulevard Louis-XIV,46.86636436173443,-71.26263794786634
309033,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,106,DHP,N,,Privés,Boulevard Louis-XIV,46.86622339438618,-71.26284915325978
309034,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,126,DHP,N,,Privés,Boulevard Louis-XIV,46.8661705912424,-71.26293070048543
309035,tronçon,Populus deltoides,peuplier à feuilles deltoides,Feuillu,139,DHP,N,,Privés,Boulevard Louis-XIV,46.86556742351086,-71.26381160011466
309040,tronçon,Juglans cinerea,noyer cendré,Feuillu,69,DHP,N,,Privés,Le Trait-Carré Ouest,46.860166446536994,-71.27260023487132
309041,tronçon,Juglans nigra,noyer noir,Feuillu,38,DHP,N,,Privés,Le Trait-Carré Ouest,46.8601391395784,-71.27261002070315
309322,tronçon,Betula papyrifera,bouleau à papier,Feuillu,106,M,O,,Privés,Chemin de la Baie-de-l'Écho,46.93477004132671,-71.38797997716271
309340,tronçon,Pinus cembra,pin cembro,Conifère,66,DHP,N,,Privés,Rue des Pâquerettes,46.88834181929565,-71.27708810687653
309356,tronçon,Pinus strobus,pin blanc,Conifère,99,DHP,N,,Privés,Rue Bernier Est,46.910586280348966,-71.31951450756158
309376,tronçon,Tsuga canadensis,pruche de L'est,Conifère,81,DHP,N,,Privés,Chemin de la Baie-de-l'Écho,46.93356445201986,-71.38383352145443
309476,tronçon,Populus x canescens,peuplier grisard,Feuillu,107,DHP,N,,Privés,Avenue Notre-Dame,46.81641062134469,-71.37550971519188
309477,tronçon,Populus x canescens,peuplier grisard,Feuillu,72,DHP,N,,Privés,Avenue Notre-Dame,46.81644084647516,-71.37552772691308
309478,tronçon,Populus x canescens,peuplier grisard,Feuillu,71,DHP,N,,Privés,Avenue Notre-Dame,46.81645797638142,-71.3755346884149
309479,tronçon,Populus x canescens,peuplier grisard,Feuillu,120,DHP,N,,Privés,Avenue Notre-Dame,46.81640533816401,-71.37545120826417
309491,Lieu public,Fraxinus pennsylvanica,frêne rouge,Feuillu,119,DHP,N,,Privés,Ilot Cimetière Saint-Charles,46.80708820792224,-71.25973581954237
309492,tronçon,Sorbus intermedia,sorbier de Suède,Feuillu,74,DHS,N,,Privés,Rue Robitaille,46.819689702517906,-71.30284357867257
309519,tronçon,Populus nigra 'Italica',peuplier de Lombardie,Feuillu,74,M,O,,Privés,Boulevard Saint-Jacques,46.828716869318605,-71.32573506334546
309523,tronçon,Populus x canescens,peuplier grisard,Feuillu,121,DHP,N,,Privés,Avenue Fillon,46.806390335505434,-71.32094401072162
309622,tronçon,Populus x canescens,peuplier grisard,Feuillu,103,M,O,,Privés,Boulevard Wilfrid-Hamel,46.80636840443716,-71.32089227655528
309623,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,72,DHP,N,,Privés,Côte des Érables,46.85339817681378,-71.30293055036896
309624,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,70,M,O,,Privés,Côte des Érables,46.853447441188074,-71.30282019775277
309625,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,83,DHP,N,,Privés,Côte des Érables,46.8535116793747,-71.30266180926004
309626,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,89,M,O,,Privés,Côte des Érables,46.85355936592744,-71.30255704537409
309627,tronçon,Populus alba,peuplier blanc,Feuillu,120,M,O,,Privés,Avenue Chauveau,46.850082374999694,-71.3110800829209
309628,tronçon,Larix laricina,mélèze laricin,Conifère,81,DHP,N,,Privés,Côte des Érables,46.85288634711899,-71.3047944496497
309629,tronçon,Quercus rubra,chêne rouge,Feuillu,173,M,O,,Privés,Rang Saint-Ange,46.76545739428175,-71.4128778482843
309630,tronçon,Larix decidua,mélèze d'Europe,Conifère,74,DHP,N,,Privés,Rue de Champigny Ouest,46.77377864892062,-71.3760505292616
309631,tronçon,Pinus resinosa,pin rouge,Conifère,75,DHP,N,,Privés,Route Sainte-Geneviève,46.835510462974796,-71.39977328182428
309632,tronçon,Pinus strobus,pin blanc,Conifère,77,DHP,N,,Privés,Boulevard Bastien,46.855538524777344,-71.34271185163287
309633,tronçon,Pinus strobus,pin blanc,Conifère,60,DHP,N,,Privés,Boulevard Bastien,46.85563711791745,-71.34279221123408
309634,tronçon,Pinus strobus,pin blanc,Conifère,76,DHP,N,,Privés,Boulevard Bastien,46.85567941824235,-71.34286681173381
309635,tronçon,Pinus strobus,pin blanc,Conifère,71,DHP,N,,Privés,Boulevard Bastien,46.85567896778213,-71.3429279830839
309636,tronçon,Ostrya virginiana,ostryer de Virginie,Feuillu,50,DHP,N,,Privés,Boulevard Bastien,46.85586999066071,-71.34299472143434
309639,tronçon,Quercus rubra,chêne rouge,Feuillu,105,DHP,N,,Privés,Rue de la Faune,46.87072228250826,-71.33889894432274
309669,tronçon,Picea omorika,épinette de Serbie,Conifère,18,DHP,N,,Privés,Avenue du Colonel-Jones,46.77268971043358,-71.32804600175857
309674,tronçon,Juglans cinerea,noyer cendré,Feuillu,88,DHS,N,,Privés,Rue Louis-Armand-Desjardins,46.755682359336944,-71.3532480934521
309696,tronçon,Fraxinus americana,frêne blanc,Feuillu,95,DHP,N,,Privés,Rue Saint-Félix,46.744788673917924,-71.3521433411998
309697,tronçon,Larix decidua,mélèze d'Europe,Conifère,65,DHP,N,,Privés,Rue Catherine-Nau,46.7378367118747,-71.36086246903267
309698,tronçon,Pinus nigra,pin noir d'Autriche,Conifère,71,DHP,N,,Privés,Rue Catherine-Nau,46.73801982502398,-71.36117007287518
309710,tronçon,Fraxinus pennsylvanica,frêne rouge,Feuillu,114,DHP,N,,Privés,Chemin de la Canardière,46.84495557547562,-71.2217177587906
309711,tronçon,Juglans cinerea,noyer cendré,Feuillu,70,DHP,N,,Privés,Chemin de la Canardière,46.84702747188286,-71.22215699735254
309712,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,120,DHP,N,,Privés,Chemin de la Canardière,46.847278532196476,-71.22278427032101
309713,tronçon,Tilia americana,tilleul d'Amérique,Feuillu,117,DHP,N,,Privés,Chemin de la Canardière,46.84722946998434,-71.22270101806474
309714,tronçon,Tilia platyphyllos,tilleul de Hollande,Feuillu,74,DHP,N,,Privés,Chemin de la Canardière,46.84638101960119,-71.21670670040308
309966,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,77,DHP,N,,Privés:C.C.B.N,Parc des Champs-de-Bataille,46.79669991081682,-71.22599970278344
309967,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,117,DHP,N,,Privés:C.C.B.N,Parc des Champs-de-Bataille,46.80044713204062,-71.22338356622816
309969,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,154,DHP,N,,Privés:C.C.B.N,Parc des Champs-de-Bataille,46.796605591811996,-71.22672696208477
309980,Lieu public,Ulmus glabra,orme des montagnes (orme blanc),Feuillu,134,DHP,N,,Privés:C.C.B.N,Parc des Champs-de-Bataille,46.801485012614506,-71.22244220798939
309982,tronçon,Pinus strobus,pin blanc,Conifère,68,DHP,N,,Privés,Chemin Saint-Louis,46.77238258958637,-71.25252307737979
309983,tronçon,Pinus strobus,pin blanc,Conifère,75,DHP,N,,Privés,Chemin Saint-Louis,46.77224937304437,-71.25241586698337
323346,tronçon,Acer platanoides 'Deborah',érable de Norvège 'Deborah',Feuillu,12,DHP,N,2016-06-01,Public,Rue de l'Aster,46.82828401927429,-71.31776155282482
331386,tronçon,Acer rubrum 'Northwood',érable rouge 'Northwood',Feuillu,5,DHP,N,2017-06-02,Public,Avenue Wilfrid-Pelletier,46.77189376350562,-71.30945928426236
349947,tronçon,Acer rubrum 'Northwood',érable rouge 'Northwood',Feuillu,5,DHP,N,2020-06-09,Public:Arbre mitoyen,Avenue Paul-Comtois,46.857815033898866,-71.2710477665813
351821,tronçon,Celtis occidentalis,micocoulier occidental,Feuillu,8,DHP,N,2020-11-01,Public,Avenue De Bougainville,46.79836041571503,-71.23422877271572
364566,tronçon,Amelanchier canadensis 'Robin Hill',amélanchier du Canada 'Robin Hill',Feuillu,5,DHP,N,2023-07-17,Public:Terrain Privé,Avenue du Monument,46.84928633503128,-71.20888982110591
369179,tronçon,Acer rubrum 'Morgan',érable rouge 'Morgan',Feuillu,5,DHP,N,2023-06-12,Public,Rue Marie-Rollet,46.7941620325114,-71.25355388340263
377930,Lieu public,Acer saccharum,érable à sucre,Feuillu,5,DHP,N,2023-08-11,Public,Parc de la Falaise,46.76591317146845,-71.26715262128322
379616,Lieu public,Acer saccharinum,érable argenté,Feuillu,5,DHP,N,2023-10-31,Public:Terrain Privé,Ilot Fabrique St-Dominique,46.80131054014122,-71.22499107552684`;
