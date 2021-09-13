function submitNumber( event ){
    event.preventDefault();

    // let currentValue = document.querySelector( '#number-choice' );
    // console.log( currentValue.value );
    
    let eventValue = event.target.number_choice.value;
    let results = document.querySelector( '.js-results' );
    results.innerHTML = "";
    
    for( let i = 1; i <= eventValue; i ++ ){
        if( i % 5 === 0 && i % 3 === 0 ){
            results.innerHTML += `<div class="fizz-buzz-item fizzbuzz"> 
                                    <span>
                                        FizzBuzz 
                                    </span>
                                  </div>`;
        }
        else{
            if( i % 5 === 0 ){
                results.innerHTML += `<div class="fizz-buzz-item buzz"> 
                                        <span>
                                            Buzz 
                                        </span>
                                    </div>`;
            }
            else{
                if( i % 3 === 0 ){
                    results.innerHTML += `<div class="fizz-buzz-item fizz"> 
                                            <span>
                                                Fizz 
                                            </span>
                                        </div>`;
                }
                else{
                    results.innerHTML += `<div class="fizz-buzz-item"> 
                                            <span>
                                                ${i}
                                            </span>
                                        </div>`;
                }
            }
        }
    }

    return false;
}