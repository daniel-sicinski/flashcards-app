import React from "react";
import AuthViewLayout from "../AuthViewLayout/AuthViewLayout";

export default function OfflinePage() {
  return (
    <AuthViewLayout>
      <h2 className="header-2">Nie można wyświetlić strony</h2>
      <p>
        Nie jesteś zalogowany i nie masz dostępu do Internetu. Aby móc korzystać
        z aplikacji, połącz się z Internetem i zaloguj się.
      </p>
    </AuthViewLayout>
  );
}
