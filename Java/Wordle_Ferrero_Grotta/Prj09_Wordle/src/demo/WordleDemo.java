package demo;

import controller.WordleCtrl;
import model.WordleModel;
import view.WordleView;


//avvio del gioco dop aver creato il modello la vista e il controller
public class WordleDemo {
    public static void main(String[] args) {
        WordleModel model = new WordleModel();
        WordleView view = new WordleView();
        WordleCtrl controller = new WordleCtrl(model, view);
        controller.gioca();
    }
}
