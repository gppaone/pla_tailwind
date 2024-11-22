export function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
  
    document.addEventListener('click', handleClick);
  
    return {
      destroy() {
        document.removeEventListener('click', handleClick);
      }
    };
  }