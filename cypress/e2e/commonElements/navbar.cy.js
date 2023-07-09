describe("Test site navbar", () => {
  it("Test non dropdown links on navbar", () => {
    const links = {
      "Insurance Project": "demo.guru99.com/insurance/v1/index.php",
      "Agile Project": "demo.guru99.com/Agile_Project/Agi_V1/",
      "Bank Project": "demo.guru99.com/V1/index.php",
      "Security Project": "demo.guru99.com/Security/SEC_V1/index.php",
      "Telecom Project": "demo.guru99.com/telecom/index.html",
      "Payment Gateway Project": "demo.guru99.com/payment-gateway/index.php",
      "New Tours": "demo.guru99.com/test/newtours/",
    };

    cy.visit("https://demo.guru99.com/");
    cy.get("#navbar-brand-centered").should("be.visible");
    cy.get("#navbar-brand-centered ul.nav.navbar-nav").should("be.visible");

    for (let [linkName, url] of Object.entries(links)) {
      cy.CheckElementOnNavbar(linkName, url);
    }
  });

  it("Test dropdown links on navbar", () => {
    const links = {
      Selenium: {
        "Flash Movie Demo": "/test/flash-testing.html",
        "Radio & Checkbox Demo": "/test/radio.html",
        "Table Demo": "/test/table.html",
        "Accessing Link": "/test/link.html",
        "Ajax Demo": "/test/ajax.html",
        "Inside & Outside Block Level Tag": "/test/block.html",
        "Delete Customer Form": "/test/delete_customer.php",
        Yahoo: "/test/yahoo.html",
        Tooltip: "/test/tooltip.html",
        "File Upload": "/test/upload/",
        Login: "/test/login.html",
        "Social Icon": "/test/social-icon.html",
        "Selenium Auto IT": "/test/autoit.html",
        "Selenium IDE Test": "/test/facebook.html",
        "Guru99 Demo Page": "/test/guru99home/",
        "Scrollbar Demo": "/test/guru99home/scrolling.html",
        "File Upload using Sikuli Demo": "/test/image_upload/",
        "Cookie Handling Demo": "/test/cookie/selenium_aut.php",
        "Drag and Drop Action": "/test/drag_drop.html",
        "Selenium DatePicker Demo": "/test/",
      },
      SEO: {
        "Page-1": "demo.guru99.com/seo/page-1.html",
        "Page-2": "demo.guru99.com/seo/page-2.html",
        "Page-3": "demo.guru99.com/seo/page-3.html",
        "Page-4": "demo.guru99.com/seo/page-4.html",
        "Page-5": "demo.guru99.com/seo/page-5.html",
        "Page-6": "demo.guru99.com/seo/page-6.html",
      },
    };

    cy.visit("https://demo.guru99.com/");
    cy.get("#navbar-brand-centered").should("be.visible");
    cy.get("#navbar-brand-centered ul.nav.navbar-nav").should("be.visible");

    for (let [linkName, subLinks] of Object.entries(links)) {
      for (let [subLinkName, url] of Object.entries(subLinks)) {
        cy.CheckDropdownElementOnNavbar(linkName, subLinkName, url, linkName === "SEO");
      }
    }
  });
});
