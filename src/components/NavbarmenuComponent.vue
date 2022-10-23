<template>
    <nav class="navbar navbar-expand-lg bg-black p-3">
        <div class="container-fluid">
            <router-link to="principal" class="navbar-brand text-light">Mix - Peliculas</router-link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent me-2">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link active text-uppercase text-light" aria-current="page" to="acercade">Peliculas</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-uppercase text-light" to="series">Link</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled text-uppercase text-light">Deshabilitado</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" size="70">
            <button class="btn btn-outline-light" type="submit">Buscar</button>
        </form>
        </div>
    </nav>
</template>