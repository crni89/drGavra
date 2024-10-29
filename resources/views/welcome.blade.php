<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>DrGavrilovic</title>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">

        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    </head>
    <body>
        <div id="app"></div>
        @vite('resources/js/app.js')
    </body>
</html>
