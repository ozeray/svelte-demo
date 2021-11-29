<script>
  import translations from "../i18n/translations";
  import { locale, t } from "../i18n/i18n";

  $: languages = Object.keys(translations);
  
  </script>

<div class="navbar navbar-expand-sm fixed-top navbar-dark bg-primary">
    <div class="container-fluid">
      <a href="/" class="navbar-brand"><span>{$t('title.hastaSonuc')}</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="../yardim/">Yardım</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../logout">Çıkış</a>
          </li>
          <li class="nav-item">
            <select bind:value={$locale} on:change={()=>location.reload()}>
              {#each languages as lang}
                <option value={lang}>{lang}</option>
              {/each}
            </select>
          </li>
        </ul>
      </div>
    </div>
</div>