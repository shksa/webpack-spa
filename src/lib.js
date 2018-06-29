const parser = new DOMParser();

export const domParser = htmlStr => {
  const document = parser.parseFromString(htmlStr, "text/html");
  return document.body.firstChild;
};

export const processHtml = (ownComponentHtmlPieces, ...outerComponents) => {
  const ownComponentHtmlWithSlots = ownComponentHtmlPieces.reduce(
    (acc, ele, idx) => {
      if (idx === ownComponentHtmlPieces.length - 1) {
        const eleWithSlots = acc.concat(ele);
        return eleWithSlots;
      }
      const eleWithSlots = acc
        .concat(ele)
        .concat(`<slot name=slot-${idx}></slot>`);
      return eleWithSlots;
    },
    ""
  );
  return { ownComponentHtmlWithSlots, outerComponents };
};

export const createHostAndAttachShadowTree = ownComponentTreeWithSlots => {
  const ownComponentTreeWithSlotsClone = ownComponentTreeWithSlots.cloneNode(
    true
  );
  ownComponentTreeWithSlotsClone.innerHTML = "";
  const shadowRoot = ownComponentTreeWithSlotsClone.attachShadow({
    mode: "open"
  });
  const ownComponentTreeWithSlotsChildren = ownComponentTreeWithSlots.children;
  // console.log(
  //   "ownComponentTreeWithSlotsChildren",
  //   ownComponentTreeWithSlotsChildren
  // );
  const crazy = ownComponentTreeWithSlotsChildren.length;
  for (let i = 0; i < crazy; i++) {
    // console.log(
    //   `ownComponentTreeWithSlotsChildren[${i}]`,
    //   ownComponentTreeWithSlotsChildren[0]
    // );
    shadowRoot.appendChild(ownComponentTreeWithSlotsChildren[0]);
  }
  return ownComponentTreeWithSlotsClone;
};

export const attachLightTree = (shadowHost, compsToDistribute) => {
  for (let i = 0; i < compsToDistribute.length; i++) {
    const compTree = compsToDistribute[i].render();
    compTree["slot"] = `slot-${i}`;
    shadowHost.appendChild(compTree);
  }
  return shadowHost;
};


export const replaceChild = (parent, newChild) => {
  parent.replaceChild(newChild, parent.firstChild)
}

export const renderComponentUnder = (parent, component) => {
  parent.appendChild(component)
}