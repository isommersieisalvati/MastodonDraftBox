function isValidSocialMediaPage() {
  const footer = document.querySelector('.link-footer');
  if (!footer) return false;

  const hasJoin = links.some(link => link.href.includes('https://joinmastodon.org/'));
  const hasGit = links.some(link => link.href.includes('https://github.com/mastodon/mastodon'));

  return hasJoin && hasGit;
}

function addDraftButton() {
    dropdown = document.querySelector('.compose-form__dropdowns');

}

const observer = new MutationObserver(() => {
  addDraftButton();
});
observer.observe(document.body, { childList: true, subtree: true });

// Initial check on load
addDraftButton();