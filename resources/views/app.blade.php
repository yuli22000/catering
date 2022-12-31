<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('/assets/css/styles.css') }}">
  <link rel="shortcut icon" href="{{ asset('/assets/images/logo.png') }}" />
    {{-- owl carousel --}}
    <link href="{{ asset('/assets/css/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/assets/css/owl.theme.default.min.css') }}" rel="stylesheet">
    <!-- Default theme -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css"/>
  @viteReactRefresh
  @vite('resources/js/app.jsx')
  @inertiaHead
</head>
<body class="hold-transition sidebar-mini">

    @inertia

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('/assets/owl.carousel.min.js') }}"></script>
    <script id="dsq-count-scr" src="//catering-1.disqus.com/count.js" async></script>

    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Catering Aisyah.</a></noscript>
</body>
</html>