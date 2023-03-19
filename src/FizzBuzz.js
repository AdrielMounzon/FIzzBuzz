export function fizzbuzz(num)
{
    if(num%3==0 && num%5==0)
    {
        return "FizzBuzz";
    }
    if(num%3==0)
    {
        return "Fizz";
    }
    if(num%5==0)
    {
        return "Buzz";
    }
    return num + "";
}

export function cadenaFizzBuzz(num)
{
    let cadena = "";
    for(let i=1;i<=num;i++)
    {
        cadena = cadena + fizzbuzz(i);
        if(i<num)
        {
            cadena=cadena+", ";
        }
    }
    return cadena;
}