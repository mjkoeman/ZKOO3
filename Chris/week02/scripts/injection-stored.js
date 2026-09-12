<script>
    let textArea = document.getElementsByName("mtxMessage")[0].setAttribute("maxlength",5000);
    let container = document.getElementsByClassName("body_padded")[0];
    container.innerHTML = "<h1> Name: Chris " + new Date(Date.now()) + "</h1>"  + container.innerHTML;
</script>