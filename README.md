# SharePoint Framework Weather Web Part

![Weather Web Part displayed in SharePoint Workbench](./assets/preview.png)

Web Part built using the SharePoint Framework showing current weather for the specified location.

## Running this Web Part

- clone this repo
- `$ npm i`
- `$ tsd install`
- `$ gulp serve`

## Features

The Weather Web Part is a Client-Side Web Part built on the SharePoint Framework. It uses jQuery and the simpleWeather jQuery plugin ([http://simpleweatherjs.com](http://simpleweatherjs.com)) loaded from CDN to show the current weather for the given location.

This Web Part illustrates the following concepts on top of the SharePoint Framework:
- loading jQuery from CDN
- loading non-AMD jQuery plugins with configured dependency on jQuery
- using non-reactive Web Part Property Pane
- using conditional rendering for one-time Web Part setup