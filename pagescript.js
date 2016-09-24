(function () {
  function rot13Char(ch) {
    switch (ch) {
      case 'a': return 'n';
      case 'A': return 'N';
      case 'b': return 'o';
      case 'B': return 'O';
      case 'c': return 'p';
      case 'C': return 'P';
      case 'd': return 'q';
      case 'D': return 'Q';
      case 'e': return 'r';
      case 'E': return 'R';
      case 'f': return 's';
      case 'F': return 'S';
      case 'g': return 't';
      case 'G': return 'T';
      case 'h': return 'u';
      case 'H': return 'U';
      case 'i': return 'v';
      case 'I': return 'V';
      case 'j': return 'w';
      case 'J': return 'W';
      case 'k': return 'x';
      case 'K': return 'X';
      case 'l': return 'y';
      case 'L': return 'Y';
      case 'm': return 'z';
      case 'M': return 'Z';
      case 'n': return 'a';
      case 'N': return 'A';
      case 'o': return 'b';
      case 'O': return 'B';
      case 'p': return 'c';
      case 'P': return 'C';
      case 'q': return 'd';
      case 'Q': return 'D';
      case 'r': return 'e';
      case 'R': return 'E';
      case 's': return 'f';
      case 'S': return 'F';
      case 't': return 'g';
      case 'T': return 'G';
      case 'u': return 'h';
      case 'U': return 'H';
      case 'v': return 'i';
      case 'V': return 'I';
      case 'w': return 'j';
      case 'W': return 'J';
      case 'x': return 'k';
      case 'X': return 'K';
      case 'y': return 'l';
      case 'Y': return 'L';
      case 'z': return 'm';
      case 'Z': return 'M';
    }
    return ch;
  }

  function doRot13(string) {
    var result = "";
    for (var i = 0; i < string.length; ++i) {
      result += rot13Char(string[i]);
    }
    return result;
  }

  function replaceRot13(element) {
    [].forEach.call(element.childNodes, function (node) {
      switch (node.nodeType) {
          case Node.TEXT_NODE:
            node.textContent = doRot13(node.textContent);
            break;
          case Node.ELEMENT_NODE:
            if (node.tagName == "SCRIPT" || node.tagName == "STYLE")
            {
              return;
            }
            replaceRot13(node);
            break;
      }
    });
  }

  if (document.readyState === 'complete') {
      replaceRot13(document.body);
  }
  else {
    document.addEventListener('DOMContentLoaded', function (e) {
      replaceRot13(document.body);
    });
  }
})();
