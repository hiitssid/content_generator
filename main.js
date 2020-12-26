function myFunction() {
    let title = document.getElementById("title").value;
    let isbn = document.getElementById("isbn").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let publication = document.getElementById("publication").value;
    let pages = document.getElementById("pages").value;
    let format = document.getElementById("format").value;

    document.write("ISBN: ", isbn);
    document.write("<br />")
    document.write("Author: ", author);
    document.write("<br />")
    document.write("Genre: ", genre);
    document.write("<br />")
    document.write("Publication: ", publication);
    document.write("<br />")
    document.write("Format: ", format);
    document.write("<br />")
    document.write("Pages: ", pages," pages");
    document.write("<br />")
    document.write("Language: English");
    document.write("<br />")
    document.write("<br />")
    document.write("<br />")
    document.write(title, " by ", author);
    document.write("<br />")
    document.write("<br />")
    document.write("<br />")
    document.write("1pc Book x ", title,);
    
}