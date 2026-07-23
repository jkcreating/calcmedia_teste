const form = document.getElementById('form'); 
form.addEventListener('submit', function(event){
    event.preventDefault(); 

    /*const weight = document.getElementById('weight').value; 
    const height = document.getElementById('height').value; */
    
    const nota_atividade = document.getElementById('nota_atividade').value; 
    const nota_prova = document.getElementById('nota_prova').value; 

    /*Média Parcial: [(4xN1)+(6xN2)]/10*/
    /*const bmi = (weight / (height * height)).toFixed(2); 
    const value = document.getElementById('value'); 
    let description = ''; 
    value.classList.add('attention')*/

    const nota_1_media = ((Number(nota_atividade))+(Number(nota_prova))).toFixed(2); 
    const value = document.getElementById('value'); 
    let description = ''; 
    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden');

    if (nota_1_media < 4){
        description = 'abaixo do peso'; 
    }
    else{
        description = 'esta ok esta ok esta ok esta ok esta ok'; 
        value.classList.remove('attention');
        value.classList.add('normal')
    }




    value.textContent = nota_1_media; 
    document.getElementById('description').textContent = description
})


