function copyfunction(id) {
    var textToCopy = document.getElementById(id);
    var CopyRange = document.createRange();
  
    CopyRange.selectNode(textToCopy);
  
    window.getSelection().addRange(CopyRange);
    document.execCommand("copy");
    
    var myToast = Toastify({
        text: "Copied Highlighed",
        duration: 5000
    })
    myToast.showToast();
}