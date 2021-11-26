<form>
    <div class="mb-3">
        <label for="tckn" class="form-label">TC Kimlik Numarası</label>
        <input
            type="number"
            class="form-control"
            id="tckn"
            aria-describedby="tcknHelp"
        />
        <div id="tcknHelp" class="form-text">
            Lütfen sadece rakam kullanınız
        </div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
        />
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
