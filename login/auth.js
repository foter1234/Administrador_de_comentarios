const supabaseUrl = "https://uqhuqyyzygzisohwkyeu.supabase.co";
const supabaseKey = "sb_publishable_JxPXj6Vyt7z_Jj_SPofMOw_Gsmk3hMW";

const client = supabase.createClient(supabaseUrl, supabaseKey);

async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const { data, error } = await client.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    msg.textContent = error.message;
  } else {
    msg.textContent = "Conta criada! Verifique seu e-mail.";
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const { data, error } = await client.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    msg.textContent = error.message;
  } else {
    msg.textContent = "Login realizado!";
    window.location.href = "/home.html";
  }
}
