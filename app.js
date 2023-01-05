const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("dotenv").config();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myName = "todailyn";

const keyword = ["#옷스타그램", "#좋아요반사", "#좋아요테러", "#좋반"];

async function nextPage(driver) {
  try {
    await sleep(8000 + Math.random() * 2000);
    const liked = await driver.findElements(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/div[1]/article/div/div[2]/div/div[2]/section[1]/span[1]/button/div[2]"
      )
    );
    if (liked.length > 0) {
      const likeButton = await driver.findElement(
        By.xpath(
          "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/div[1]/article/div/div[2]/div/div[2]/section[1]/span[1]/button"
        )
      );
      await likeButton.sendKeys(Key.ENTER);
    }
    await Like(driver);
    await sleep(8000 + Math.random() * 5000);
    return;
    // const nextButton = await driver.findElement(
    //   By.xpath(
    //     "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[3]/div/div/div/div/div[1]/div/div/div[2]/button"
    //   )
    // );
    // await nextButton.sendKeys(Key.ENTER);
  } catch (error) {
    console.log(error);
  }
}

async function Like(driver) {
  await sleep(8000 + Math.random() * 1000);
  const lessLike = await driver.findElements(
    By.xpath(
      "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/div[1]/article/div/div[2]/div/div[2]/section[2]/div/div/div/a[2]"
    )
  );
  let iguji;
  if (lessLike.length > 0) {
    iguji = await driver.findElement(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/div[1]/article/div/div[2]/div/div[2]/section[2]/div/div/div/a[2]"
      )
    );
    await iguji.sendKeys(Key.ENTER);
    await sleep(8000 + Math.random() * 1000);
    const parents = await driver.findElements(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[3]/div/div"
      )
    );
    if (parents.length > 0) {
      const parent = await driver.findElement(
        By.xpath(
          "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[3]/div/div"
        )
      );
      const childrens = await parent.findElements(By.xpath("*"));
      const anchors = [];
      if (childrens.length > 1) {
        if (childrens.length < 4) {
          for (let i = 0; i < childrens.length; i++) {
            const person = await childrens[i].findElement(
              By.xpath("./div[2]/div[1]/div/div/span/a")
            );
            const personName = await person
              .findElement(By.xpath("./span/div"))
              .getAttribute("innerText");
            if (personName !== myName)
              anchors.push(await person.getAttribute("href"));
          }
        } else {
          for (let i = 0; i < 4; i++) {
            const person = await childrens[i].findElement(
              By.xpath("./div[2]/div[1]/div/div/span/a")
            );
            const personName = await person
              .findElement(By.xpath("./span/div"))
              .getAttribute("innerText");
            if (personName !== myName)
              anchors.push(await person.getAttribute("href"));
          }
        }
      }
    }
  } else {
    iguji = await driver.findElement(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/div[1]/article/div/div[2]/div/div[2]/section[2]/div/div/div/a"
      )
    );
    await iguji.sendKeys(Key.ENTER);
    await sleep(8000 + Math.random() * 1000);
    const parents = await driver.findElements(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div"
      )
    );
    if (parents.length > 0) {
      const check = await driver.findElement(
        By.xpath(
          "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div"
        )
      );
      const checks = await check.findElements(By.xpath("*"));
      const parent =
        checks.length > 2
          ? await driver.findElement(
              By.xpath(
                "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[3]/div/div"
              )
            )
          : await driver.findElement(
              By.xpath(
                "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div"
              )
            );
      const childrens = await parent.findElements(By.xpath("*"));
      const anchors = [];
      if (childrens.length > 1) {
        if (childrens.length < 4) {
          for (let i = 0; i < childrens.length; i++) {
            const person = await childrens[i].findElement(
              By.xpath("./div[2]/div[1]/div/div/span/a")
            );
            const personName = await person
              .findElement(By.xpath("./span/div"))
              .getAttribute("innerText");
            if (personName !== myName)
              anchors.push(await person.getAttribute("href"));
          }
        } else {
          for (let i = 0; i < 4; i++) {
            const person = await childrens[i].findElement(
              By.xpath("./div[2]/div[1]/div/div/span/a")
            );
            console.log(person);
            const personName = await person
              .findElement(By.xpath("./span/div"))
              .getAttribute("innerText");
            if (personName !== myName)
              anchors.push(await person.getAttribute("href"));
          }
        }
        await sleep(8000);
        for (let i = 0; i < anchors.length; i++) {
          await driver.get(anchors[i]);
          await profileFeed(driver);
          await sleep(8000);
        }
      }
    }
  }
}

async function profileFeed(driver) {
  await sleep(8000);
  const name1 = await driver.findElements(
    By.xpath(
      "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[2]/div[2]/section/main/div/header/section/div[1]/h2"
    )
  );
  const name2 = await driver.findElements(
    By.xpath(
      "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[2]/div[2]/section/main/div/header/section/div[1]/a/h2"
    )
  );
  if (
    (name1.length > 0 && name1[0].getAttribute("innerText") === myName) ||
    (name2.length > 0 && name2[0].getAttribute("innerText") === myName)
  ) {
    return;
  }
  const parents1 = await driver.findElement(
    By.xpath(
      "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div"
    )
  );

  const parents2 = await parents1.findElements(By.xpath("*"));
  if (parents2.length > 0) {
    if (
      (
        await parents2[parents2.length - 1].findElements(
          By.xpath("./article/div[1]/div/h2")
        )
      ).length > 0
    ) {
      if (
        (await (
          await parents2[parents2.length - 1].findElement(
            By.xpath("./article/div[1]/div/h2")
          )
        ).getAttribute("innerText")) === "비공개 계정입니다"
      ) {
        return;
      }
    }
    const a = await parents2[parents2.length - 1].findElement(
      By.xpath("./article")
    );
    const b = await a.findElements(By.xpath("*"));
    const c = await b[0].findElements(By.xpath("./div"));
    const parents3 = await c[0].findElements(By.xpath("*"));
    if (parents3.length > 0) {
      if ((await parents3[0].findElements(By.xpath("*"))).length > 0) {
        const childrens = await parents3[0].findElements(By.xpath("*"));
        const anchors2 = [];
        if (childrens.length > 0) {
          for (let i = 0; i < childrens.length; i++) {
            const person = await childrens[i].findElement(By.xpath("./a"));
            anchors2.push(person);
          }
          for (let i = 0; i < anchors2.length; i++) {
            anchors2[i].sendKeys(Key.ENTER);
            await sleep(8000);
            const liked = await driver.findElements(
              By.xpath(
                "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[3]/div/div/div/div/div[2]/div/article/div/div[2]/div/div/div[2]/section[1]/span[1]/button/div[2]"
              )
            );
            if (liked.length > 0) {
              const likeButton = await driver.findElement(
                By.xpath(
                  "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[3]/div/div/div/div/div[2]/div/article/div/div[2]/div/div/div[2]/section[1]/span[1]/button"
                )
              );
              await likeButton.sendKeys(Key.ENTER);
            }
            await sleep(8000);
          }
          return;
        }
      }
    }
  }
}
let index = 0;

async function instaBot() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://www.instagram.com/");
    await sleep(5000 + Math.random() * 1000);
    const idInput = await driver.findElement(By.name("username"));
    //await idInput.sendKeys("seonwoo.jin@blueroom.app");
    //await idInput.sendKeys("wlstjsdn13@gmail.com");
    await idInput.sendKeys(process.env.ID);
    const passwordInput = await driver.findElement(By.name("password"));
    //await passwordInput.sendKeys("dkfejtjsdn12!@");
    await passwordInput.sendKeys(process.env.PASSWORD);
    await sleep(1000 + Math.random() * 5000);
    const loginButton = await driver.findElement(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/section/main/article/div[2]/div[1]/div[2]/form/div/div[3]/button"
      )
    );
    await loginButton.sendKeys(Key.ENTER);
    await sleep(3000 + Math.random() * 5000);
    const laterButtonExist = await driver.findElements(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div/div/div/div/button"
      )
    );
    if (laterButtonExist.length > 0) {
      const laterButton = await driver.findElement(
        By.xpath(
          "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div/div/div/div/button"
        )
      );
      await laterButton.sendKeys(Key.ENTER);
    }
    await sleep(5000 + Math.random() * 5000);
    const laterButton2Exist = await driver.findElements(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[3]/button[2]"
      )
    );
    if (laterButton2Exist.length > 0) {
      const laterButton2 = await driver.findElement(
        By.xpath(
          "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[3]/button[2]"
        )
      );
      await laterButton2.sendKeys(Key.ENTER);
    }
    await sleep(3000 + Math.random() * 5000);
    while (true) {
      const date = new Date();
      if (date.getHours() === 2) {
        return;
      } else {
        await driver.get("https://www.instagram.com/");
        await search(driver);
      }
      // if (date.getHours() >= 15 && date.getHours() <= 23) {
      //   await driver.get("https://www.instagram.com/");
      //   await search(driver);
      // } else {
      //   return;
      // }
    }
  } finally {
    await driver.quit();
  }
}

async function search(driver) {
  try {
    const searchAnchor = await driver.findElement(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[1]/div/div/div/div/div[2]/div[2]/div/a"
      )
    );
    await searchAnchor.sendKeys(Key.ENTER);
    await sleep(8000 + Math.random() * 5000);
    const searchInput = await driver.findElement(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/input"
      )
    );
    await searchInput.sendKeys(keyword[index], Key.ENTER);
    await sleep(8000 + Math.random() * 5000);
    // const searchResultArray = [];
    // for (let i = 1; i < 6; i++) {
    //   const searchResult = driver.findElement(
    //     By.xpath(
    //       `/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div/div[${i}]/div/a`
    //     )
    //   );
    //   searchResultArray.push(searchResult);
    // }
    // searchResultArray[0].sendKeys(Key.ENTER);
    const searchResult = await driver.findElement(
      By.xpath(
        `/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div/div[1]/div/a`
      )
    );
    await searchResult.sendKeys(Key.ENTER);
    await sleep(10000 + Math.random() * 5000);
    const anchors = [];
    const recentPost = await driver.findElement(
      By.xpath(
        "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/article/div[2]/div/div[1]"
      )
    );
    const recentPosts = await recentPost.findElements(By.xpath("*"));
    for (let i = 0; i < recentPosts.length; i++) {
      const url = await recentPosts[i]
        .findElement(By.xpath("./a"))
        .getAttribute("href");
      anchors.push(url);
    }
    // const recentPost = await driver.findElements(
    //   By.xpath(
    //     "/html/body/div[2]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/article/div[2]/div/div[1]/div[1]/a"
    //   )
    // );
    for (let i = 0; i < anchors.length; i++) {
      await driver.get(anchors[i]);
      //await recentPost.sendKeys(Key.ENTER);
      await sleep(8000 + Math.random() * 5000);
      await nextPage(driver);
      await sleep(8000 + Math.random() * 5000);
    }
    index++;
    if (index === keyword.length) {
      index = 0;
    }
  } catch (error) {
    console.log(error);
  }
}

async function test() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("https://www.instagram.com/p/Cm_2p9AhGuS/");
  await sleep(20000);
  const check = await driver.findElement(
    By.xpath(
      "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div"
    )
  );
  const checks = await check.findElements(By.xpath("*"));
  const parent =
    checks.length > 2
      ? await driver.findElement(
          By.xpath(
            "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[3]/div/div"
          )
        )
      : await driver.findElement(
          By.xpath(
            "/html/body/div[2]/div/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div"
          )
        );
  const childrens = await parent.findElements(By.xpath("*"));
  console.log(childrens);
  const anchors = [];
  if (childrens.length > 1) {
    if (childrens.length < 4) {
      for (let i = 0; i < childrens.length; i++) {
        const person = await childrens[i].findElement(
          By.xpath("./div[2]/div[1]/div/div/span/a")
        );
        console.log(person);
        const personName = await person
          .findElement(By.xpath("./span/div"))
          .getAttribute("innerText");
        if (personName !== myName)
          anchors.push(await person.getAttribute("href"));
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const person = await childrens[i].findElement(
          By.xpath("./div[2]/div[1]/div/div/span/a")
        );
        console.log(person);
        const personName = await person
          .findElement(By.xpath("./span/div"))
          .getAttribute("innerText");
        if (personName !== myName)
          anchors.push(await person.getAttribute("href"));
      }
    }
    await sleep(8000);
    for (let i = 0; i < anchors.length; i++) {
      await driver.get(anchors[i]);
      await profileFeed(driver);
      await sleep(8000);
    }
  }
}

instaBot();
//test();
