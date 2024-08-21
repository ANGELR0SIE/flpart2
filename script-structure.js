function createHeader() {
  const navBar = document.querySelector(".nav-bar-margin");

  flipkart.header.forEach((item) => {
    const headerLogo = document.createElement("div");
    headerLogo.className = "header-logo";

    const logoImage = document.createElement("img");
    logoImage.src = item.headerLogo_icon;

    const logoText = document.createElement("p");
    logoText.innerHTML = `${item.headerLogo_p} <span>${item.headerLogo_span}</span> <img src=${item.headerLogo_plus}>`;

    const logoLink = document.createElement("a");
    logoLink.className = "link";
    logoLink.appendChild(logoText);

    headerLogo.appendChild(logoImage);
    headerLogo.appendChild(logoLink);

    const searchBar = document.createElement("div");
    searchBar.className = "header-search-bar";

    const searchBg = document.createElement("div");
    searchBg.className = "search-bg wht-bg";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.type = "text";
    searchInput.placeholder = item.searchBar_placeholder;

    const searchImg = document.createElement("div");
    searchImg.className = "search-img";

    const searchIcon = document.createElement("img");
    searchIcon.src = item.searchBar_searchIcon;

    searchImg.appendChild(searchIcon);
    searchBg.appendChild(searchInput);
    searchBg.appendChild(searchImg);

    searchBar.appendChild(searchBg);

    const login = document.createElement("div");
    login.className = "login";
    const loginLink = document.createElement("a");
    loginLink.className = "login-link wht-bg clr-bl";
    loginLink.innerHTML = item.login;
    login.appendChild(loginLink);

    const seller = document.createElement("div");
    seller.className = "seller";
    const sellerLink = document.createElement("a");
    sellerLink.className = "seller-link";
    sellerLink.innerHTML = item.seller;
    seller.appendChild(sellerLink);

    const more = document.createElement("div");
    more.className = "more";
    const moreLink = document.createElement("a");
    moreLink.className = "more-link";
    moreLink.innerHTML = item.More_span;
    const moreIcon = document.createElement("img");
    moreIcon.src = item.More_icon;
    more.appendChild(moreLink);
    more.appendChild(moreIcon);

    const cart = document.createElement("div");
    cart.className = "cart";
    const cartLink = document.createElement("a");
    cartLink.className = "cart-link";
    const cartImg = document.createElement("img");
    cartImg.src = item.cart_icon;
    const cartSpan = document.createElement("span");
    cartSpan.innerHTML = item.cart_span;
    cartLink.appendChild(cartImg);
    cartLink.appendChild(cartSpan);
    cart.appendChild(cartLink);

    navBar.appendChild(headerLogo);
    navBar.appendChild(searchBar);
    navBar.appendChild(login);
    navBar.appendChild(seller);
    navBar.appendChild(more);
    navBar.appendChild(cart);
  });
}

function createSubNav() {
  const subnavBar = document.querySelector(".sub-nav-margin");

  flipkart.subNav.forEach((item) => {
    const subNavItem = document.createElement("div");
    subNavItem.className = "sub-nav-item";

    const subNavText = document.createElement("span");
    subNavText.innerHTML = item.text;

    const subNavImage = document.createElement("img");
    subNavImage.src = item.image;

    subNavItem.appendChild(subNavText);
    subNavItem.appendChild(subNavImage);

    subnavBar.appendChild(subNavItem);
  });
}

function createLeftSidebar() {
  const leftSidebar = document.createElement("div");
  leftSidebar.className = "left";
  const bodySection = document.querySelector(".body-section");
  bodySection.appendChild(leftSidebar);

  flipkart.left.topDiv.forEach((item) => {
    const topLeft = document.createElement("div");
    topLeft.className = "top-left";

    const filterHd = document.createElement("section");
    filterHd.className = "filter-hd";

    const filterHdSpan = document.createElement("span");
    filterHdSpan.innerHTML = item.head;

    const filterListHidden = document.createElement("div");
    filterListHidden.className = "filter-list-hidden";

    filterHd.appendChild(filterHdSpan);
    filterHd.appendChild(filterListHidden);

    const categories = document.createElement("section");
    categories.className = "categories";

    const catHead = document.createElement("div");
    const catHeadSpan = document.createElement("span");
    catHeadSpan.innerHTML = item.catHead;
    catHead.appendChild(catHeadSpan);

    const greyDiv = document.createElement("div");
    greyDiv.className = "grey";
    const greyImg = document.createElement("img");
    greyImg.src = item.image;
    const greyLink = document.createElement("a");
    greyLink.innerHTML = item.greytxt;
    greyDiv.appendChild(greyImg);
    greyDiv.appendChild(greyLink);

    const boldDiv = document.createElement("div");
    boldDiv.className = "bold";
    const boldImg = document.createElement("img");
    boldImg.src = item.image;
    const boldLink = document.createElement("a");
    boldLink.innerHTML = item.blacktxt;
    boldDiv.appendChild(boldImg);
    boldDiv.appendChild(boldLink);

    categories.appendChild(catHead);
    categories.appendChild(greyDiv);
    categories.appendChild(boldDiv);

    topLeft.appendChild(filterHd);
    topLeft.appendChild(categories);

    leftSidebar.appendChild(topLeft);
  });

  flipkart.left.section1.forEach((item) => {
    const section = document.createElement("section");
    section.className = "section sec1 wht-bg";
    const leftSecTitle = document.createElement("div");
    leftSecTitle.className = "left-sec-title";
    const leftSecTitleSpan = document.createElement("span");
    leftSecTitleSpan.innerHTML = item.title;
    leftSecTitle.appendChild(leftSecTitleSpan);
    section.append(leftSecTitle);
    const leftSecBody = document.createElement("div");
    leftSecBody.className = "left-sec-body";
    const selectMin = document.createElement("select");
    item.min.forEach((item) => {
      const option = document.createElement("option");
      option.className = "min-list-el";
      option.innerHTML = `${item}`;
      selectMin.append(option);
    });
    leftSecBody.append(selectMin);
    const selectMax = document.createElement("select");
    item.max.forEach((item) => {
      const option = document.createElement("option");
      option.className = "max-list-el";
      option.innerHTML = `${item}`;
      selectMax.append(option);
    });
    leftSecBody.append(selectMax);
    section.append(leftSecBody);
    leftSidebar.appendChild(section);
  });

  flipkart.left.section2.forEach((item) => {
    const section = document.createElement("section");
    section.className = "section sec2 wht-bg";

    const leftSecTitle = document.createElement("div");
    leftSecTitle.className = "left-sec-title";
    const leftSecTitleSpan = document.createElement("span");
    leftSecTitleSpan.innerHTML = item.title;
    leftSecTitle.appendChild(leftSecTitleSpan);

    const leftSecBody = document.createElement("div");
    leftSecBody.className = "left-sec-body";

    const removeItems = document.createElement("div");
    removeItems.className = "remove-items sec2-remove-items";
     removeItems.onclick="clearAllFilters(2)"
    removeItems.style.display = "none";
    const removeIcon = document.createElement("span");
    removeIcon.className = "icon";
    removeIcon.innerHTML = "✕";
    const removeText = document.createElement("span");
    removeText.className = "text";
    removeText.innerHTML = "Clear all";
    removeItems.appendChild(removeIcon);
    removeItems.appendChild(removeText);

    const leftSecSearchbar = document.createElement("div");
    leftSecSearchbar.className = "left-sec-searchbar";
    const searchBarIcon = document.createElement("img");
    searchBarIcon.src = item.searchBarIcon;
    const searchBarInput = document.createElement("input");
    searchBarInput.className = "sec2-search-input";
    searchBarInput.placeholder = item.searchBarText;
    leftSecSearchbar.appendChild(searchBarIcon);
    leftSecSearchbar.appendChild(searchBarInput);

    const checkboxUl = document.createElement("ul");
    checkboxUl.className = "checkbox-ul";
    item.options.forEach((option) => {
      const li = document.createElement("li");
      li.className = "checkbox-li";
      const input = document.createElement("input");
      input.className = "sec2-input";
      input.type = "checkbox";
      input.value = option;
      const span = document.createElement("span");
      span.innerHTML = option;
      li.appendChild(input);
      li.appendChild(span);
      checkboxUl.appendChild(li);
    });

    const leftSecMore = document.createElement("div");
    leftSecMore.className = "left-sec-more";
    const leftSecMoreSpan = document.createElement("span");
    leftSecMoreSpan.innerHTML = item.more;
    leftSecMore.appendChild(leftSecMoreSpan);

    leftSecBody.appendChild(removeItems);
    leftSecBody.appendChild(leftSecSearchbar);
    leftSecBody.appendChild(checkboxUl);
    leftSecBody.appendChild(leftSecMore);

    section.appendChild(leftSecTitle);
    section.appendChild(leftSecBody);

    leftSidebar.appendChild(section);
  });

  flipkart.left.section3.forEach((item) => {
    const section = document.createElement("section");
    section.className = "section sec3 wht-bg ";

    const label = document.createElement("label");
    label.className = "label-sec3";
    const input = document.createElement("input");
    input.type = "checkbox";
    const fLogo = document.createElement("img");
    fLogo.src = item.fLogo;
    label.appendChild(input);
    label.appendChild(fLogo);

    const questionSec = document.createElement("div");
    questionSec.className = "question-sec3";
    const questionSpan = document.createElement("span");
    questionSpan.innerHTML = item.question;
    questionSec.appendChild(questionSpan);

    section.appendChild(label);
    section.appendChild(questionSec);

    leftSidebar.appendChild(section);
  });
  flipkart.left.section4.forEach((item) => {
    const section = document.createElement("section");
    section.className = "section sec4";

    const title = document.createElement("div");
    title.className = "left-sec-title";
    title.innerHTML = `<span>${item.title}</span>`;
    section.appendChild(title);

    const leftSecBody = document.createElement("div");
    leftSecBody.className = "left-sec-body";

    const removeItems = document.createElement("div");
    removeItems.className = "remove-items sec4-remove-items";
     removeItems.onclick="clearAllFilters(4)"
    removeItems.style.display = "none";
    const removeIcon = document.createElement("span");
    removeIcon.className = "icon";
    removeIcon.innerHTML = "✕";
    const removeText = document.createElement("span");
    removeText.className = "text";
    removeText.innerHTML = "Clear all";
    removeItems.appendChild(removeIcon);
    removeItems.appendChild(removeText);

    const checkboxUl = document.createElement("ul");
    checkboxUl.className = "checkbox-ul";

    item.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.className = "checkbox-li";
      const input = document.createElement("input");
      input.className = "sec4-input";
      input.type = "checkbox";
      input.value = option;
      input.id = `${item.id[index]}`;

      const span = document.createElement("span");
      span.innerHTML = option;
      span.className = "rating";
      li.appendChild(input);
      li.appendChild(span);
      checkboxUl.appendChild(li);
    });

    leftSecBody.appendChild(removeItems);
    leftSecBody.appendChild(checkboxUl);

    section.appendChild(leftSecBody);
    leftSidebar.appendChild(section);
  });

  flipkart.left.section5.forEach((item) => {
    const section = document.createElement("section");
    section.className = "section sec5";
    const title = document.createElement("div");
    title.className = "left-sec-title";
    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = item.title;
    title.appendChild(titleSpan);
    section.appendChild(title);
    const leftSecBody = document.createElement("div");
    leftSecBody.className = "left-sec-body";
    const removeItems = document.createElement("div");
    removeItems.className = "remove-items sec5-remove-items";
    removeItems.style.display = "none";
    const removeIcon = document.createElement("span");
    removeIcon.className = "icon";
    removeIcon.innerHTML = "✕";
    const removeText = document.createElement("span");
    removeText.className = "text";
    removeText.innerHTML = "Clear all";
    removeItems.appendChild(removeIcon);
    removeItems.appendChild(removeText);
    const checkboxUl = document.createElement("ul");
    checkboxUl.className = "checkbox-ul";
    item.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.className = "checkbox-li";
      const input = document.createElement("input");
      input.className = "sec5-input";
      input.type = "checkbox";
      input.value = option;

      const span = document.createElement("span");
      span.innerHTML = option;
      span.className = "rating";
      li.appendChild(input);
      li.appendChild(span);
      checkboxUl.appendChild(li);
    });
    leftSecBody.appendChild(removeItems);
    leftSecBody.appendChild(checkboxUl);

    section.appendChild(leftSecBody);
    leftSidebar.appendChild(section);
  });
  flipkart.left.section6.forEach((item) => {
    const section = document.createElement("section");
    section.className = "section sec6";

    const title = document.createElement("div");
    title.className = "left-sec-title";

    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = item.title;
    title.appendChild(titleSpan);
    section.appendChild(title);

    const leftSecBody = document.createElement("div");
    leftSecBody.className = "left-sec-body";

    const removeItems = document.createElement("div");
    removeItems.className = "remove-items sec6-remove-items";
    removeItems.style.display = "none";
     removeItems.onclick="clearAllFilters(6)"
    const removeIcon = document.createElement("span");
    removeIcon.className = "icon";
    removeIcon.innerHTML = "✕";

    const removeText = document.createElement("span");
    removeText.className = "text";
    removeText.innerHTML = "Clear all";
    removeItems.appendChild(removeIcon);
    removeItems.appendChild(removeText);

    const checkboxUl = document.createElement("ul");
    checkboxUl.className = "checkbox-ul";

    item.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.className = "checkbox-li";

      const input = document.createElement("input");
      input.className = "sec6-input";
      input.type = "checkbox";
      input.value = option;
      input.id = item.id[index];

      const span = document.createElement("span");
      span.innerHTML = option;
      span.className = "rating";

      li.appendChild(input);
      li.appendChild(span);
      checkboxUl.appendChild(li);
    });

    leftSecBody.appendChild(removeItems);
    leftSecBody.appendChild(checkboxUl);

    section.appendChild(leftSecBody);
    leftSidebar.appendChild(section);
  });

  flipkart.left.section7.forEach((item) => {
    const section = document.createElement("section");
    section.className = "section sec7";

    const title = document.createElement("div");
    title.className = "left-sec-title";

    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = item.title;
    title.appendChild(titleSpan);
    section.appendChild(title);

    const leftSecBody = document.createElement("div");
    leftSecBody.className = "left-sec-body";

    const removeItems = document.createElement("div");
    removeItems.className = "remove-items sec7-remove-items";
    removeItems.style.display = "none";

    const removeIcon = document.createElement("span");
    removeIcon.className = "icon";
    removeIcon.innerHTML = "✕";

    const removeText = document.createElement("span");
    removeText.className = "text";
    removeText.innerHTML = "Clear all";
    removeItems.appendChild(removeIcon);
    removeItems.appendChild(removeText);

    const checkboxUl = document.createElement("ul");
    checkboxUl.className = "checkbox-ul";

    item.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.className = "checkbox-li";

      const input = document.createElement("input");
      input.className = "sec7-input";
      input.type = "checkbox";
      input.value = option;
      

      const span = document.createElement("span");
      span.innerHTML = option;
      span.className = "rating";

      li.appendChild(input);
      li.appendChild(span);
      checkboxUl.appendChild(li);
    });

    leftSecBody.appendChild(removeItems);
    leftSecBody.appendChild(checkboxUl);

    section.appendChild(leftSecBody);
    leftSidebar.appendChild(section);
  });
}

function createRightMainbar() {
  const rightMainbar = document.createElement("div");
  rightMainbar.className = "right";
  const bodySection = document.querySelector(".body-section");
  bodySection.appendChild(rightMainbar);
  flipkart.right.div1.forEach((item) => {
    const rightHead = document.createElement("div");
    rightHead.className = "rightHead";
    const path = document.createElement("div");
    path.className = "path";
    path.innerHTML = `<span>${item.path}</span>`;
    rightHead.append(path);

    const results = document.createElement("div");
    results.className = "results";
    results.innerHTML = `<span>${item.result}</span>`;
    rightHead.append(results);
    const headTitle = document.createElement("div");
    headTitle.className = "head-title";
    const headTitleSpan1 = document.createElement("span");
    const headTitleSpan2 = document.createElement("span");
    headTitleSpan2.innerHTML = item.span;
    headTitle.appendChild(headTitleSpan1);
    headTitle.appendChild(headTitleSpan2);
    const filterBar = document.createElement("div");
    filterBar.className = "filter-bar";
    item.filters.forEach((filter) => {
      const filterText = document.createElement("div");
      filterText.className = "filter-txt";
      filterText.innerHTML = `<span class="${filter.cls}">${filter.text}</span>`;
      filterBar.append(filterText);
    });
    rightHead.appendChild(headTitle);
    rightHead.appendChild(filterBar);
    rightMainbar.appendChild(rightHead);
  });

  const rightSections = document.createElement("div");
  rightSections.className = "right-sec";
  rightMainbar.appendChild(rightSections);

  flipkart.right.rightSections.forEach((item) => {
    const rightSecBox = document.createElement("div");
    rightSecBox.className = "right-sec-div";

    const rightSection = document.createElement("section");
    rightSection.className = "right-Section";
    const imgRel = document.createElement("div");
    imgRel.className = "img-rel";

    const imageDiv = document.createElement("div");
    imageDiv.className = "image-div";

    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.alt = "Product Image";

    const compareDiv = document.createElement("div");
    compareDiv.className = "compare";

    const checkboxDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxDiv.appendChild(checkbox);

    const compareSpan = document.createElement("span");
    compareSpan.innerHTML = "Add to Compare";

    compareDiv.append(checkboxDiv, compareSpan);

    const heartDiv = document.createElement("div");
    heartDiv.className = "heart";

    const heartImg = document.createElement("img");
    heartImg.src = item.heart;

    heartDiv.appendChild(heartImg);
    const date = document.createElement("div");
    date.innerHTML = `<span data-date="${item.Date}"></span>`;

    imageDiv.append(productImage, compareDiv, heartDiv);
    imgRel.appendChild(imageDiv);
    rightSection.appendChild(imgRel);

    const row = document.createElement("div");
    row.className = "row";

    const rowLeft = document.createElement("div");
    rowLeft.className = "row-left";

    const heading = document.createElement("h2");
    heading.innerHTML = `<span class="brand"> ${item.name} </span>  (${item.color} ,${item.storage})`;

    const subTitle = document.createElement("div");
    subTitle.className = "sub-title";

    const ratingBtn = document.createElement("div");
    ratingBtn.className = "rating-btn";

    const ratingSpan = document.createElement("span");
    ratingSpan.innerHTML = item.ratings;

    const ratingImg = document.createElement("img");
    ratingImg.src = "";

    ratingBtn.append(ratingSpan, ratingImg);

    const reviewsDiv = document.createElement("div");
    reviewsDiv.className = "reviews";

    const reviewsSpan = document.createElement("span");
    reviewsSpan.innerHTML = `${item.Ratings} Ratings & ${item.reviews} Reviews`;

    reviewsDiv.appendChild(reviewsSpan);
    subTitle.append(ratingBtn, reviewsDiv);

    const features = document.createElement("ul");
    features.className = "features";

    const featureItems = [
      `${item.storage} ROM`,
      item.display,
      item.cameras,
      item.processor,
      item.warranty,
    ];

    featureItems.forEach((text) => {
      const li = document.createElement("li");
      li.innerHTML = text;
      features.appendChild(li);
    });

    rowLeft.append(heading, subTitle, features);
    row.appendChild(rowLeft);

    // Row right
    const rowRight = document.createElement("div");
    rowRight.className = "row-right";

    const priceDetails = document.createElement("div");
    priceDetails.className = "price-details";

    const priceDiv = document.createElement("div");
    priceDiv.className = "price";

    const currPriceSpan = document.createElement("span");
    currPriceSpan.className = "curr-price";
    currPriceSpan.innerHTML = `₹${item.price}`;

    const orgPriceDiv = document.createElement("div");
    orgPriceDiv.className = "org-price";
    orgPriceDiv.innerHTML = `₹${item.originalPrice}`;

    const discountSpan = document.createElement("span");
    discountSpan.className = "discount";
    discountSpan.innerHTML = item.discount;

    orgPriceDiv.appendChild(discountSpan);

    priceDiv.append(currPriceSpan, orgPriceDiv);

    const deliverySpan = document.createElement("span");
    deliverySpan.className = "delivery";
    deliverySpan.innerHTML = item.delivery;

    priceDetails.append(priceDiv, deliverySpan);

    const deal = document.createElement("span");
    deal.className = "deal";
    deal.innerHTML = item.deal;

    priceDetails.append(deal);

    const fLogoDiv = document.createElement("div");
    fLogoDiv.className = "f-logo";

    const fLogoImg = document.createElement("img");
    fLogoImg.src = "assets/fassured.png";

    fLogoDiv.appendChild(fLogoImg);

    const offersDiv = document.createElement("div");
    offersDiv.className = "offers";

    const offersSpan = document.createElement("span");
    offersSpan.innerHTML = item.specialOffers;

    offersDiv.appendChild(offersSpan);

    const stockDiv = document.createElement("div");
    stockDiv.className = "stock";

    const stockSpan = document.createElement("span");
    stockSpan.innerHTML = item.stock;

    stockDiv.appendChild(stockSpan);

    rowRight.append(priceDetails, fLogoDiv, offersDiv, stockDiv);
    row.appendChild(rowRight);

    rightSection.appendChild(row);
    rightSecBox.appendChild(rightSection);
    rightSections.appendChild(rightSecBox);
  });
}
