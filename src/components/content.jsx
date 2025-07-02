import React from 'react';

const Content = () => {
    return (
        <div>
  <div className="button" onclick="form_create()">Добавить товар</div>
  <div id="container" />
  <div className="background">
    <div id="message">
      <p className="button" onclick="$(this).hide('slowly')">Закрыть</p>
    </div>
  </div>
</div>

    );
};

export default Content;