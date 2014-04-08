Public Class Form1

    Private Sub ViewProjectToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ViewProjectToolStripMenuItem.Click

    End Sub

    Private Sub mnuQuit_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles mnuQuit.Click
            Application.Exit()
    End Sub

    Private Sub mnuCut_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles mnuCut.Click
        TextBox1.Cut()
    End Sub

    Private Sub mnuUndo_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles mnuUndo.Click
        TextBox1.Undo()
    End Sub
End Class
