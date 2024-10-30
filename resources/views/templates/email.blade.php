{{-- Kontakt osobe: {{$data['email']}}
{{$data['message']}}

<br>
<br>
<br> --}}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <div>
        <div style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 800;">
            Kontak osobe
        </div>
        <div style="font-weight: 300; padding-left: 8px; padding-top: 8px;">
            <div>
                <div style="display: inline;">
                    Ime i prezime:
                </div>
                <div style="font-weight: 600; display: inline; text-transform: uppercase; margin-left: 10px;"> {{$data['name']}} </div>

            </div>
            <div>
                <div style="display: inline;">
                    Email:
                </div>
                <div style="font-weight: 600; margin-top: 4px; display: inline; margin-left: 10px;">{{$data['email']}}</div>
            </div>
        </div>
    </div>
    <div style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 700;  padding-top: 1.25rem;">
        Poruka:
    </div>
    <div style="padding-left: 8px; padding-top: 8px;">
        {{$data['message']}}
    </div>
    <div>
        <div style="font-family: Arial, sans-serif; color: #333; padding: 50px; font-style: italic;">
            <p style="display: inline;"> Ova poruka je poslata sa sajta </p> <a href="https://drgavrilovic.rs" target="_blank" style="font-weight: 600; display: inline;"> Dr Gordana Gavrilovića</a>
        </div>
    </div>
</body>
</html>
