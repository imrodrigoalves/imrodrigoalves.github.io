<script setup>
const date = new Date().getFullYear();
const usefulLinks = [
    {
        url: 'https://gist.github.com/imrodrigoalves',
        label: 'Gists'   
    }
];

const socialNetworks = [
    {
        label: 'Twitter',
        url: 'https://www.twitter.com/imrodrigoalves'
    },
    {
        label: 'Laracasts',
        url: 'https://www.laracasts.com/@imrodrigoalves'
    },
    {
        label: 'Github',
        url: 'https://www.github.com/imrodrigoalves'
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rodrigo-alves-vilela'
    }
];
</script>
<template>
  <footer class="relative bg-gray-300 pt-24 pb-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 ">
          <h4 class="text-3xl font-semibold text-cyan-900">Let's keep in touch!</h4>
          <h5 class="text-md mt-0 mb-2 text-slate-600">
            Find me on any of these platforms.
          </h5>
          <div class="mt-6">
            <a
              v-for="link in socialNetworks"
              :href="link.url"
              target="_blank"
              class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
            >
              {{link.label}}
            </a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 mt-8 lg:mt-auto">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 md:ml-auto">
              <span class="block uppercase text-cyan-900 text-sm font-semibold mb-2">Useful Links</span>
              <ul class="list-unstyled">
                <li v-for="link in usefulLinks">
                  <a
                    class="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    :href="link.url"
                    target="_blank"
                    >{{link.label}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 py-1">
            Copyright © {{ date }} 
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
